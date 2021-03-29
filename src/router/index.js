import Vue from "vue";
import VueRouter from "vue-router";
import cookie from 'vue-cookies'

import store from "../store/store";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Auth from "@/views/Auth/Auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    meta: {
      view: "Home",
    },
  },
  {
    path: "/registration",
    name: "Registration",
    component: Auth,
    meta: {
      component: "SignUp",
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    meta: {
      component: "SignIn",
    },
  },
  {
    path: "/panel",
    name: "Panel",
    component: MainLayout,
    meta: {
      view: "Panel",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const accessToken =
    cookie.get("access_token") || store.state.tokens.accessToken;

  // console.log(accessToken);
  if (accessToken) {
    next();
  } else if (
    // store.state.isAuth ||
    to.path === "/auth" ||
    to.path === "/registration"
  )
    next();
  else next({ path: "/auth" });
});
export default router;
