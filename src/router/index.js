import Vue from "vue";
import VueRouter from "vue-router";

import MainLayout from "@/layouts/MainLayout/MainLayout";
import Auth from "@/views/Auth/Auth";

import store from "../store/store";

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
    path: "/auth",
    name: "Auth",
    component: Auth,
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
  if (store.state.isAuth || to.path === "/auth") next();
  else next({ path: "/auth" });
});
export default router;
