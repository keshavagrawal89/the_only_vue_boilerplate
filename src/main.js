import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/theme.css'

import { auth } from './firebaseConfig'
import config from './config/config'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.prototype.appConfig = config;

// Very important to make sure that firebase is initialized before
// the app gets mounted
auth.onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    beforeCreate () { store.dispatch('setUser', auth.currentUser)},
    render: (h) => h(App)
  }).$mount('#app')
})
