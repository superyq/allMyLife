import Vue from 'vue';
import SvgIcon from "./svg-icon.vue";

// 注册svg组件
Vue.component(SvgIcon.name, SvgIcon);

// 引入svg图标
const requirAll = i => i.keys().map(i);
const req = require.context("@/icons", true, /\.svg$/);
requirAll(req);