import Vue from "vue";
import VueRouter from "vue-router";

import Auth from "@/views/Auth/Auth";
import MainLayout from "@/layouts/MainLayout/MainLayout";

import store from "../store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    meta: {
      view: "Home",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (store.state.isAuth) {
//     return next();
//   }
//   return next({ path: "/auth" });
// });
export default router;
