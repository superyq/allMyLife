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
  {
    path: "/system",
    name: "system",
    meta: {
      isSystem: true
    },
    component: () => import("@/views/system"),
    children: [
      {
        path: "/system/echarts",
        name: "echarts",
        component: () => import("@/views/echarts"),
        meta: {
          isSystem: true,
          isTab: true,
          title: '图形'
        }
      },
      {
        path: "/system/aa",
        name: "aa",
        component: () => import("@/views/aa"),
        meta: {
          isSystem: true,
          isTab: true,
          title: 'aa'
        }
      },
      {
        path: "/system/bb",
        name: "bb",
        component: () => import("@/views/bb"),
        meta: {
          isSystem: true,
          isTab: true,
          title: 'bb'
        }
      }
    ]
  },
  { path: "*", component: () => import("@/views/home") }
];

export default routes;
