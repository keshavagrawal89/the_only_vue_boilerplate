import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/theme.css'

import { auth } from './firebaseConfig'
import config from './config/config'

// Vue.prototype.appConfig = config;

// Very important to make sure that firebase is initialized before
// the app gets mounted

const app = createApp(App);
app.config.globalProperties.$appConfig = config;

app.use(router)
app.use(store)

let mounted = false

auth.onAuthStateChanged(() => {
  if (!mounted) {
    console.log('this was called')
    app.mount("#app")
    mounted = true
  }
})
