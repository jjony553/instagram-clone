import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DirectView from'../views/DirectView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },{
    path:'/direct',
    name:'direct',
    component:DirectView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
