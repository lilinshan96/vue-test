// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

//1.引入
//2，注册中间件
Vue.use(VueRouter)
//3，引入地址
import login from './components/login.vue'




const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login
    }
  ]
})


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>',
  render: c => c(App),
  router
})
