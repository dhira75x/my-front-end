import { createRouter, createWebHistory } from 'vue-router'
import Caroul from '../components/molecules/Slider/caroul.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'caroul',
      component: Caroul
    },
    {
      path: '/user-login',
      name: 'user-login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/help-page',
      name: 'help-page',
      component: () => import('../components/pages/helpPage.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../components/pages/faq.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/molecules/contact.vue')
    },
    {
      path: '/dispatch-login',
      name: 'dispatch-login',
      component: () => import('../components/pages/dispatch/login.vue')
    },
    {
      path: '/vendor-login',
      name: 'vendor-login',
      component: () => import('../components/pages/profile/vendor/login.vue')
    },
    {
      path: '/vendor-reg',
      name: 'vendor-reg',
      component: () => import('../components/pages/profile/vendor/vendor-reg.vue')
    },
    {
      path: '/user-reg',
      name: 'user-reg',
      component: () => import('../views/registration.vue')
    },
    {
      path: '/dispatch-reg',
      name: 'dispatch-reg',
      component: () => import('../components/pages/dispatch/register.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../components/pages/cart/cart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../components/pages/checkout/checkout.vue')
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: () => import('../views/Authentication/payment/transaction.vue')
    },
  ]
})

export default router
