import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from 'vuex';


import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import Dashboard from '@/views/Dashboard.vue';
import { auth } from '../firebaseConfig';
import NotFound from '@/components/NotFound.vue'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }, {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: false
    }
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/login',
    name: 'login',
    component: Auth,
    meta: {
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const store = useStore();

  auth.onAuthStateChanged((user) => {
    const isAuthenticated = false;
    if (user) {
      store.dispatch('setUser', user)
    }
    if (isAuthenticated && to.path == "/login") {
      return { name: "dashboard" }
    }
    if (requiresAuth && !isAuthenticated) {
      return { name: "login" }
    }
  })

  return true  
});

export default router
