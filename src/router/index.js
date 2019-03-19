import Vue from 'vue'
import Router from 'vue-router'
import ForgetPW from '../pages/user/forgetpw/ForgetPW'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'

import store from '../store'
import { USER_STATUS } from '../store/modules/user/user'
Vue.use(Router)

const router = new Router({
  mode: 'history', //取消默认的 hash 模式 #
  routes: [
    { path: '/user/forgetpw', name: 'forgetpw', component: ForgetPW },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: Home },
    { path: '*', name: 'login', component: Login }
  ]
})

//导航守卫
router.beforeEach((to, from, next) => {
  const nextRoute = ['home']
  let userStatus = store.state.user.userStatus
  // 未登陆状态；当路由到 nextRoute 指定页时，跳转至 login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (userStatus === USER_STATUS.IDLE) {
      router.replace({ name: 'login' })
    }
  }
  // 已登陆状态，当编程式路由到 login 时，跳转至 home,to 嵌套路由例外
  if (to.name === 'login') {
    if (userStatus === USER_STATUS.LOGIN) {
      router.push({ name: 'home' })
    }
  }
  next()
})

export default router
