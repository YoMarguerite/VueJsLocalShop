import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.prototype.$idUser = 1;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
