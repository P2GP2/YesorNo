import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import CircularCountDownTimer from "vue-circular-count-down-timer";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(CircularCountDownTimer);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "http://localhost:3000",
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
