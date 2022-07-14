import VueRouter from 'vue-router'
import Vue from 'vue'
import home from '@/pages/home'
import download from '@/pages/download'
import index from '@/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    name: 'homepage',
    path: '/',
    redirect: '/home',
    component: index,
    children: [
      {
        name: 'home',
        path: '/home',
        component: home,
      },
      {
        name: 'download',
        path: '/download',
        component: download
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_Basepath,
  routes,
})

export default router
