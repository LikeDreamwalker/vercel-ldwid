import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
// import VConsole from "vconsole";
Vue.config.productionTip = false;
// const vConsole = new VConsole();
// Vue.use(vConsole);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
