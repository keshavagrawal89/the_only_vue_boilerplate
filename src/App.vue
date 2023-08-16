<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #D63964;">
      <div class="container">
        <a class="navbar-brand text-white pointer" @click="goTo('/')">The Only Boilerplate</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="bi bi-gear"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="handleSignout">Signout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="goTo('/login')">Signin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="mt-3"></div> <!-- Spacer between content and navigation bar -->

    <div class="container">
      <router-view />
    </div>
  </div>
</template>


<script>
import { computed } from 'vue'
import { auth } from './firebaseConfig'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const router = useRouter();

    store.dispatch('setUser', auth.currentUser);

    const handleSignout = async () => {
      await store.dispatch('logOut');
      router.push('/');
    }
    const goTo = (route) => {
      router.push(route);
    }

    const userEmail = computed(() => store.getters.userEmail);
    console.log("well hello in app.vue");
    return {
      userEmail,
      handleSignout,
      goTo
    }
  }
}
</script>

<style>

</style>