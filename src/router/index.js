import { createRouter, createWebHistory } from 'vue-router'
import FoodView from '@/views/FoodView.vue'
import DrinkView from '@/views/DrinkView.vue'
import OtherView from '@/views/OtherView.vue'
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/food' , component :FoodView},
    { path: '/drink' , component :DrinkView},
    { path: '/other' , component :OtherView},
    { path: '/', redirect: '/food' }
  ],
})

export default router
