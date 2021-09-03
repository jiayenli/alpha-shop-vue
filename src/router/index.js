import Vue from 'vue'
import VueRouter from 'vue-router'

import Checkout from '../views/Checkout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect: '/AlphaShop/Checkout'
  },
  {
    path: '/AlphaShop',
    name: 'AlphaShop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect: '/AlphaShop/Checkout'
  },

  {
    path: '/AlphaShop/Checkout',
    name: 'Checkout',
    component: Checkout,
    redirect: '/AlphaShop/Checkout/address',
    children: [
      {
        path: 'address',
        name: 'address',
        component: () => import('../components/FormPanelStep1.vue')

      },
      {
        path: 'delivery',
        name: 'delivery',
        component:()=>import('../components/FormPanelStep2.vue')

      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('../components/FormPanelStep3.vue')

      },

    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
