import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import tst from '@/components/tst'
import header from '@/components/header'
import register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    }, {
      path: '/test',
      name: 'tst',
      component: tst
    }, {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
