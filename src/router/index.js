import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebaseConfig';

import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import Dashboard from '@/views/Dashboard.vue';
import TestPage from '@/views/TestPage.vue';

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
    path: '/test',
    name: 'test',
    component: TestPage,
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
  // auth.onAuthStateChanged(user => {

  // })
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser !== null;

  console.log(requiresAuth, isAuthenticated, to.path);

  if (isAuthenticated && to.path == "/login") {
    return { name: "dashboard" }
  }
  if (requiresAuth && !isAuthenticated) {
    return { name: "login" }
  }

  return true  
});

export default router
