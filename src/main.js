Vue.config.devtools = true;

import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VModal from "vue-js-modal";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
