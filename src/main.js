import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import momentFilter from '@/shared/momentDisplayFilter';

Vue.config.productionTip = false
Vue.filter('mdate', momentFilter);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
