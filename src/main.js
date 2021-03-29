import Vue from "vue";
import App from "./components/App/App.vue";
import VueCookies from "vue-cookies";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";

Vue.use(VueCookies);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
