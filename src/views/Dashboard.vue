<template>
  <div>
    <h1 style="text-align: center;">Dashboard</h1>
    <p style="text-align: center;">Authenticated User: {{ userEmail }}</p>

    <b-row>
      <b-col cols="4"></b-col>
      <b-col cols="4">
        <b-card>
          <b-card-body>
            <p>This data was read from config: <b-alert variant="success" show>{{ apiURL }}</b-alert></p>
            <p>This data was read from <b>environment variable</b> but <i>through config</i>: <b-alert variant="danger" show>{{ secret }}</b-alert></p>
            <p>The following data is fetched from an API</p>
            <b-alert show>
              <b>{{ fakeData }}</b>
              <br>
              <i>{{ Intl.DateTimeFormat('en-US', {dateStyle: "full", timeStyle: "long"}).format(fakeData["ts"]) }}</i>
            </b-alert>
          </b-card-body>
          <b-card-footer>
            <b-button
              @click="fetchData"
              variant="primary">
              Fetch API data
            </b-button>
          </b-card-footer>
        </b-card>
      </b-col>
      <b-col cols="4"></b-col>
    </b-row>
  </div>
</template>
  
<script>
import { mapGetters } from 'vuex';
import config from '@/config/config';

export default {
  name: 'Dashboard',
  methods: {
    fetchData() {
      this.$store.dispatch('testAction');
    }    
  },
  computed: {
    ...mapGetters(['userEmail', 'fakeData']),

    apiURL() {
      return config.apiURL
    },

    secret() {
      return config.appSettings.secret
    }
  },
};
</script>
  