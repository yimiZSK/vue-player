import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclcik from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import './common/stylus/index.styl'

/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'
// console.log('test')

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})

fastclcik.attach(document.body)
    /* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})