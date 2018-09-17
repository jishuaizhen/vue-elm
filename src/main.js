// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from './store'
// require styles
import 'swiper/dist/css/swiper.css'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/style/common.less'

// import '@/config/rem.js'
// 注册mint—ui组件
Vue.use(Mint)
// 注册轮播图组件
Vue.use(VueAwesomeSwiper)
// 注册图片懒加载组件
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535698126&di=54597f47359a09e787921da1e9376e4d&imgtype=jpg&er=1&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F29%2F90%2F03573af86229ae7.jpg',
  loading: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2235389762,297710690&fm=26&gp=0.jpg',
  attempt: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
