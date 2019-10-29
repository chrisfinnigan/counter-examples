import Vue from 'vue'
import Router from 'vue-router'
import Counters from './views/Counters.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'counters',
      component: Counters
    }
  ]
})
