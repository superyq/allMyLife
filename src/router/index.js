import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import routes from "./routes";

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  next();
})

export default router;
