<template>
  <div>
    <h1 class="text-center">Dashboard</h1>
    <p class="text-center">Authenticated User: {{ userEmail }}</p>

    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="card">
          <div class="card-body">
            <p>This data was read from config: </p><p class="alert alert-success">{{ apiURL }}</p>
            <p>This data was read from <b>environment variable</b> but <i>through config</i>: </p><div class="alert alert-danger">{{ secret }}</div>
            <p>The following data is fetched from an API</p>
            <div class="alert alert-primary">
              <b>{{ fakeData }}</b>
              <br>
              <i>{{ new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(fakeData.ts) }}</i>
            </div>
          </div>
          <div class="card-footer">
            <button @click="fetchData" class="btn btn-primary">Fetch API data</button>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

  
<script>
import config from '@/config/config';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  name: 'Dashboard',
  setup() {
    console.log("coming here in dashboard");
    const store = useStore();
    const fetchData = function () {
      store.dispatch('testAction');
    }

    const apiURL = computed(() => {
      return config.apiURL
    });

    const secret = computed(() => {
      return config.appSettings.secret
    });

    const userEmail = computed(() => store.getters.userEmail);
    const fakeData = computed(() => store.getters.fakeData);

    console.log(fakeData.value);
    console.log(userEmail.value);
    
    return {
      userEmail,
      fakeData,
      fetchData,
      apiURL,
      secret,
    }
  }
};
</script>
  