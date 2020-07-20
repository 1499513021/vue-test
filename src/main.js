import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './state/index'
import echarts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
new Vue({
  render: h => h(App),
  router,
  store,
  echarts
}).$mount('#app')
