import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import {initialize} from 'vue2-faui-user-fe'
console.log ("initialize", initialize)
Vue.config.productionTip = false

// login accounts
Vue.mixin({
  computed: {
  ...initialize.accountinit(),
  }
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')