import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

new Vue({
    router,
    store,
    vuetify,

    render: h => h(App)
}).$mount('#app')