import { RouteRecordRaw } from "vue-router"
import app from './modules/app'

const routes: RouteRecordRaw[] = [
  ...app
]

export { routes }