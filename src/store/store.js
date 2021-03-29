import Vue from "vue";
import Vuex from "vuex";

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
      this.isAuth = true;
      console.log(userData);

      state.account.id = userData._id;
      state.account.email = userData.email;
      state.account.username = userData.username;
      state.account.avatarId = userData.avatarId;
      state.account.cash = userData.cash;
    },
    setTokens(state, tokens) {
      state.tokens.accessToken = tokens.accessToken;
      state.tokens.refreshToken = tokens.refreshToken;
    },
  },
  actions: {
    signIn(ctx, data) {
      ctx.commit("setAccountData", data["user"]);
      ctx.commit("setTokens", data["tokens"]);
    },
  },
  modules: {},
});
