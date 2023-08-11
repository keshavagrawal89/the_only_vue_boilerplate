import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/css/theme.css'

import { auth } from './firebaseConfig'
import config from './config/config'

const app = createApp(App);
app.config.globalProperties.$appConfig = config;

app.use(router)
app.use(store)

let mounted = false

auth.onAuthStateChanged(() => {
  if (!mounted) {
    app.mount("#app")
    mounted = true
  }
})
