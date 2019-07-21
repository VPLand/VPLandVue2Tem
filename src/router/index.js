import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'index',
      path: '/',
      component: () => import('@/components/index.vue')
    }
  ]
})
