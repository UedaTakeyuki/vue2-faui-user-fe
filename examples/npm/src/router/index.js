import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {AccountRoutes as AccountRoutes} from 'vue2-faui-user-fe'    // If firebase is from npm or yarn

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Expand into routes array
  ...AccountRoutes.routes,

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
