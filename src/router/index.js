import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../firebaseConfig';

import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import Dashboard from '@/views/Dashboard.vue';

import NotFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
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
    name: 'Login',
    component: Auth,
    meta: {
      requiresAuth: false
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (isAuthenticated && to.path == "/login") {
    next("/dashboard");
  }
  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
