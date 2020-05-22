import Vue from 'vue'
import App from './App.vue'
import keview from '../packages/index'
Vue.use(keview)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
