import Vue from 'vue'
import App from './App.vue'
import './lib/css/bootstrap.css'
// import './lib/js/jquery-3.4.1.min.js'
// import './lib/js/bootstrap.js'
// import 'jquery'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
