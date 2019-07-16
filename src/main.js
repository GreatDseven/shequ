import Vue from 'vue'
import App from './App.vue'
import './assets/glocal.css'
import router from './router'
import './plugins/element.js'
import { PUBLICURL } from './constants'
Vue.config.productionTip = false
Vue.prototype.$publicUrl = PUBLICURL
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
