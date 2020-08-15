import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Header from './components/Header/Header'
import "lib-flexible";

Vue.config.productionTip = false;

Vue.component('Header', Header)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
