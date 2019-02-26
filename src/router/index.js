import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import index from '@/components/Index'
import home from '@/components/Home'
import info from '@/components/Info'
import signUp from '@/components/SignUp'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'Index',
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'signUp',
          component: signUp
        },
        {
          path: 'info',
          component: info
        }
      ]
    }
  ]
})
