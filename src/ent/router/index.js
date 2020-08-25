import Vue from 'vue'
import VueRouter from 'vue-router'

import login from './modules/login'
import index from './modules/index'

Vue.use(VueRouter)

const routes = [
  login,
  index
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
