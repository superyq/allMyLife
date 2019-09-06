import global from "./global";
import systemChildren from "./system";

const routes = [
  ...global,
  {
    path: "/system",
    name: "system",
    meta: {
      isSystem: true,
      isScroll: true
    },
    component: () => import("@/views/system"),
    children: systemChildren
  },
  { path: "*", component: () => import("@/views/cate") }
];

export default routes;
