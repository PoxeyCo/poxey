import Vue from "vue";
import Vuex from "vuex";
import cookie from "vue-cookies";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuth: false,
    account: {
      id: "",
      email: "",
      username: "",
      avatarId: "",
      cash: "",
      level: 0,
      expToNextLevel: 0,
      experience: 0,
    },
    character: {
      id: "",
      power: 0,
      pokemons: [],
      items: [],
      selectedItems: {},
    },
    tokens: {
      accessToken: "" || cookie.get("access_token"),
      refreshToken: "" || cookie.get("refresh_token"),
    },
    changePassword: {
      step: 0,
    },
  },
  mutations: {
    setAccountData(state, userData) {
      state.isAuth = true;

      state.account.id = userData._id;
      state.account.email = userData.email;
      state.account.username = userData.username;
      state.account.avatarId = userData.avatarId;
      state.account.cash = userData.cash;
      state.account.level = userData.level;
      state.account.expToNextLevel = userData.expToNextLevel;
      state.account.experience = userData.experience;

      cookie.set("user_id", userData._id, "1d");
    },
    setAccountProgress(state, progressData) {
      state.character.id = progressData.character._id;
      state.character.power = progressData.character.power;
      state.character.pokemons = progressData.character.pokemons;
      state.character.items = progressData.character.items;
      state.character.selectedItems = progressData.character.selectedItems;
    },
    setTokens(state, tokens) {
      state.tokens.accessToken = tokens.access;
      state.tokens.refreshToken = tokens.refresh;

      cookie.set("access_token", tokens.access, "1d");
      cookie.set("refresh_token", tokens.refresh, "1d");
    },
    removeTokens(state) {
      state.tokens.accessToken = "";
      state.tokens.refreshToken = "";

      cookie.remove("access_token");
      cookie.remove("refresh_token");
    },
    removeAccountData(state) {
      state.isAuth = false;
      state.account = {};

      cookie.remove("user_id");
    },
    changePas(state, num) {
      state.changePassword.step = num;
    }
  },
  actions: {
    signIn(ctx, data) {
      ctx.commit("setAccountData", data.user);
      ctx.commit("setTokens", data.tokens);
    },
    async authorization(ctx, userId) {
      const requestCharacters = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.get("access_token")}`,
        },
      };

      await fetch(`https://poxey.herokuapp.com/api/v1/accounts/${userId}`)
        .then((res) => res.json())
        .then((data) => ctx.commit("setAccountData", data.user));

      await fetch(
        "https://poxey.herokuapp.com/api/v1/characters/",
        requestCharacters
      )
        .then((res) => res.json())
        .then((data) => {
          ctx.commit("setAccountProgress", data);
        });
    },
    logout(ctx) {
      ctx.commit("removeTokens");
      ctx.commit("removeAccountData");

      router.push("/auth");
    },
  },
  modules: {},
});
