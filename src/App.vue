<template>
  <div id="app">
    <b-navbar style="background-color: #D63964; color: white;">
      <b-navbar-nav>
        <b-nav-item @click="$router.push('/')">The Only Boilerplate</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ms-auto">
        <b-nav-item v-if="$store.getters.userEmail"><b-icon icon="gear"></b-icon>
        </b-nav-item>                
        <b-nav-item v-if="$store.getters.userEmail">Profile
        </b-nav-item>        
        <b-nav-item v-if="$store.getters.userEmail" @click="handleSignout">Signout
        </b-nav-item>     
        <b-nav-item v-if="!$store.getters.userEmail" @click="$router.push('/login')">Signin
        </b-nav-item>        
      </b-navbar-nav>      
    </b-navbar>
    
    <div>&nbsp;</div> <!-- Spacer between content and navigation bar-->

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    async handleSignout() {
      await this.$store.dispatch('logOut');
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>