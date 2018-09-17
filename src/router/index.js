import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
// jishuaizhen
import home from '@/page/Home/home'
import citylist from '@/page/Home/citylist'
import city from '@/page/Home/city'
import shopclassinfo from '@/page/Home/shopclassinfo'
import nearshopinfo from '@/page/Home/nearshopinfo'
// wangxiaokong
import find from '@/page/Find/find'
import goldmall from '@/page/Find/goldmall'
import search from '@/page/Find/search'
import money from '@/page/Money/money'
import hispage from '@/page/Money/hispage'
import rpaged from '@/page/Money/rpaged'
// yufanhui
import mine from '@/page/Mine'
import login from '@/page/Login'
import convert from '@/page/convert'
import logintip from '@/page/logintip'

// 导入

Vue.use(Router)
var router = new Router({
  routes: [
    {path: '', redirect: '/citylist'},
    {path: '/home', name: 'home', component: home, meta: {keepAlive: true}},
    {path: '/city/:id', name: 'city', component: city},
    {path: '/citylist', name: 'citylist', component: citylist},
    {path: '/shopclassinfo', name: 'shopclassinfo', component: shopclassinfo},
    {path: '/nearshopinfo', name: 'nearshopinfo', component: nearshopinfo},
    {path: '/find', component: find},
    {path: '/goldmall', name: 'goldmall', component: goldmall, meta: {requireAuth: true}},
    {path: '/search', name: 'search', component: search},
    {path: '/money', name: 'money', component: money},
    {path: '/hispage', name: 'hispage', component: hispage, meta: {requireAuth: true}},
    {path: '/rpaged', name: 'rpaged', component: rpaged, meta: {requireAuth: true}},
    {path: '/mine', component: mine},
    {path: '/logintip', component: logintip},
    {path: '/login', component: login},
    {path: '/convert', component: convert, meta: {requireAuth: true}},
    {path: '*', redirect: '/citylist'}

  ]
})
// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.isLogin) { // 通过vuex state获取当前的username是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/logintip'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
