import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import ProductDetails from '../pages/ProductDetails.vue';
import Checkout from '../pages/Checkout.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/checkout', component: Checkout},
  { path: '/details/:productName', component: ProductDetails },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})