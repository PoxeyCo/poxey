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
    },
    tokens: {
      accessToken: "",
      refreshToken: "",
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

      cookie.set("user_id", userData._id);
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
  },
  actions: {
    signIn(ctx, data) {
      ctx.commit("setAccountData", data["user"]);
      ctx.commit("setTokens", data["tokens"]);
    },
    authorization(ctx, userId) {
      fetch(`http://poxey.herokuapp.com/api/v1/accounts/${userId}`)
        .then((res) => res.json())
        .then((data) => ctx.commit("setAccountData", data.user));
    },
    logout(ctx) {
      ctx.commit("removeTokens");
      ctx.commit("removeAccountData");

      router.push("/auth");
    },
  },
  modules: {},
});
