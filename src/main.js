import Vue from 'vue'
import App from './App'
import router from './router'
import api from './common/api/api'
import utils from './common/utils/utils'
import './common/sass/common.scss'

Vue.prototype.$api = api
Vue.prototype.$utils = utils
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
