const routes = [
  { path: "", redirect: { name: "cate" } },
  { path: "/home", name: "home", component: () => import("@/views/home") },
  {
    path: "/",
    name: "layout",
    redirect: { name: "cate" },
    component: () => import("@/views/layout"),
    children: [
      {
        path: "/cate",
        name: "cate",
        component: () => import("@/views/cate")
      },
      {
        path: "/artical/:id",
        name: "artical",
        component: () => import("@/views/artical"),
        props: true
      }
    ]
  },
  { path: "*", component: () => import("@/views/home") }
];

export default routes;
