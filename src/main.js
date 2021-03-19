import Vue from "vue";
import App from "./components/App/App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");