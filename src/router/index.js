import Vue from 'vue'
import VueRouter from 'vue-router'

const dashboard = () => import('./../views/dashboard/dashboard')
const home = () => import('./../views/home/home')
const category = () => import('./../views/category/category')
const mine = () => import('./../views/mine/mine')
const shopCart = () => import('./../views/cart/shopCart')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    children: [
      { path: '', redirect: '/dashboard/home' },
      { path: 'home', name: 'home', component: home },
      { path: 'card', name: 'card', component: shopCart },
      { path: 'mine', name: 'mine', component: mine },
      { path: 'category', name: 'category', component: category }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
