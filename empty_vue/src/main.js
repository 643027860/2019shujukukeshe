import Vue from 'vue'
import ElementUI from 'element-ui'
import $ from 'jquery'

import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el:'#app',
  render:h=>h(App),
  router,
})

