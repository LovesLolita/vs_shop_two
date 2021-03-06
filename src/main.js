import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './css/global.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://106.54.194.45:8888/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')