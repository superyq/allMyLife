const global = [
  { path: "", redirect: { name: "cate" } },
  { path: "/artical-list", name: "artical-list", component: () => import("@/views/artical-list") },
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
]

export default global;