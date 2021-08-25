import { RouteRecordRaw } from "vue-router"

const app: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Page1.vue')
  }
]

export default app