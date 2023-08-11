<template>
  <div class="Home">
    <h1 style="text-align: center;">Welcome to the Vue JS Boilerplate</h1>
    <b-row class="app-row">
      <b-col cols="4" style="align-self: center;">
        <table>
          <tbody>
            <tr>
              <td><mark>&#9889; Made with <kbd>VueJS</kbd></mark></td>
            </tr>
            <tr>
              <td><mark>&#9889; Made with <kbd>VueRouter</kbd></mark></td>
            </tr>
            <tr>
              <td><mark>&#9889; Made with <kbd>BootstrapVue</kbd></mark></td>
            </tr>
            <tr>
              <td><mark>&#9889; Made with <kbd>VueX</kbd></mark></td>
            </tr>
            <tr>
              <td><mark>&#9889; Made with <kbd>Firebase</kbd></mark></td>
            </tr>
            <tr>
              <td><mark>&#9889; Made with <kbd>Axios</kbd></mark></td>
            </tr>
            <tr>
              <td><mark>&#9889; Made with Love</mark></td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col cols="4">
        <b-card style="text-align: center;">
          <img :src="cuteImage" />
          <b-card-text>
            <p class="blockquote-footer">This image was loaded from <b>assets folder</b></p>
            <p><kbd>{{ commonMessage }}</kbd></p>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="4" style="align-self: center; text-align: right;">
        <table>
          <tbody>
            <tr>
              <td><mark>&#127881; Supports reading from config</mark></td>
            </tr>
            <tr>
              <td><mark>&#127881; Supports reading from environment variables</mark></td>
            </tr>
            <tr>
              <td><mark>&#127881; Supports firebase login</mark></td>
            </tr>
            <tr>
              <td><mark>&#127881; Supports services and API calls</mark></td>
            </tr>
            <tr>
              <td><mark>&#127881; Supports custom themeing!</mark></td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
    
    <p class="spacer"></p>
    
    <b-row>
      <b-col cols="2"></b-col>
      <b-col cols="8">
        <h5 style="text-align: center;">How to run?</h5>
        <p style="text-align: center;">
          <ul class="list-unstyled">
            <li>
              <kbd>git clone the repo</kbd>
            </li>
            <li>
              <kbd>npm i</kbd>
            </li>
            <li>
              <kbd>npm run serve</kbd>
            </li>            
          </ul>
        </p>
        <ul>
            <li class="h6">
              The app loads *only* post firebase initialization
              with right credentials. First thing to do would be to configure firebase 
              credentials in <code>firebaseConfig.js</code>.
              Initialization of this happens in <code>main.js</code>
            </li>
            <li class="h6">
              To see the flow of `signin`, `protected` page and eventually `signout`
              please create a free app on firebase console and configure the credentials
              as mentioned above.
            </li>
            <li class="h6">
              For services checkout <code>`services`</code> folder
            </li>            
            <li class="h6">
              For custom theme checkout <code>`assets/css/theme.css`</code> folder
            </li>
          </ul>        

      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
  </div>
</template>
<script>

import cuteImage from "@/assets/images/cute.png"
import config from "@/config/config"

export default {
  data() {
    return {
      commonMessage: config.commonMessage,
      cuteImage: cuteImage,
    }
  },
  setup() {

  },
}
</script>