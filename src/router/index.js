import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/products',
    name:'products',
    component:()=> import('../views/ProductsView.vue')
  },
  {
    path:'/admin',
    name:'admin',
    component:()=> import('@/views/AdminView.vue')
  },
  {
    path:'/contact',
    name:'contact',
    component:()=> import('@/views/ContactView.vue')
  },
  {
    path:'/product/:id',
    name:'product',
    component:()=> import('../views/ProductView.vue')
  },
  {
    path:'/cart',
    name:'cartview',
    component:()=> import('@/views/CartView.vue')
  },
  {
    path:'/',
    name:'loginview',
    component:()=> import('@/views/LoginView.vue')
  },
  {
    path:'/register',
    name:'registerview',
    component:()=> import('@/views/RegisterView.vue')
  },
  {
    path:'/logout',
    name:'logoutrview',
    component:()=> import('@/views/LogoutView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
