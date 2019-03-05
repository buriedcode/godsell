// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide} from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  name: 'swiper',
  components: { App, swiper, swiperSlide },
  template: '<App/>'
})
