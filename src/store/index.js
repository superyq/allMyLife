import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import avatar from "../assets/nz1.jpg";
import system from "./modules/system";

const store = new Vuex.Store({
  modules: {
    system
  },
  state: {
    name: '人生若只如初见',
    age: 18,
    avatar
  }
})

export default store;