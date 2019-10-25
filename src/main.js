import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

//axios config
const axiosConfig = {
  "baseURL": "http://localhost:3000/",
  "timeout": 10000
}

Vue.prototype.$http = axios.create(axiosConfig);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
