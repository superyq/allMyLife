import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import config from "@/config";

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element, { size: "medium" });

import "@/styles/index.scss";
import "@/svg-icon";
import myComponents from "@/components/index.js";
Vue.use(myComponents);

Vue.config.productionTip = false;
Vue.prototype.$config = config;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
