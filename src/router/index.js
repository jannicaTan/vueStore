import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 路由重定向
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "goods" */ '../views/Goods.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "personal" */ '../views/Personal.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue')
  },
  {
    path: '/free',
    name: 'Free',
    component: () => import(/* webpackChunkName: "free" */ '../views/Free.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
