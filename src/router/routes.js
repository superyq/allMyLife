const routes = [
  { path: '', redirect: { name: 'home' } },
  { path: '/home', name: 'home', component: () => import("@/views/home") }
]

export default routes;