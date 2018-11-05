import Vue from 'vue'
import App from './App.vue'
import './assets/styles/reset.css'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import fastClick from 'fastclick'
import store from './store/index'
import axios from 'axios'


Vue.use(Element,{size:'small',zIndex:3000});
// 阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
//全局拦截器
axios.interceptors.request.use(function (config) {
  // console.log(store.state.user.token);
  // if(store.state.user.token) {
  //   config.headers.Authorization = store.state.user.token;
  // }
  return config;
})
axios.interceptors.response.use(function (response) {
  let res = response.data

  //未授权重新登录获取 token
  // console.log(res)
  // if(res.data.respCode === 403){
  //   store.commit('record/logout')
  //   store.dispatch('user/logout', {userId: store.state.user.userInfo.userId})
  // }
  return response
})


