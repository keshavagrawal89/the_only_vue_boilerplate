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
              <a class="nav-link" v-if="isLoggedIn" href="#">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="isLoggedIn" @click="handleSignout">Signout</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!isLoggedIn" @click="goTo('/login')">Signin</a>
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
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  setup() {
    const store = useStore();
    const router = useRouter();    

    const handleSignout = async () => {
      await store.dispatch('logOut');
      router.push('/');
    }
    const goTo = (route) => {
      router.push(route);
    }

    const isLoggedIn = computed(() => store.getters.isLoggedIn);

    return {
      isLoggedIn,
      handleSignout,
      goTo
    }
  }
}
</script>

<style>

</style>