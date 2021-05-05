Vue.config.devtools = true;

import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import VModal from "vue-js-modal";

Vue.use(BootstrapVue);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
