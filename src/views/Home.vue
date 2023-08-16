<template>
  <div class="Home">
    <h1 class="text-center">Welcome to the Vue JS Boilerplate</h1>
    <div class="row app-row">
      <div class="col-4 align-self-center">
        <table class="table">
          <tbody>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with <kbd>VueJS</kbd></span></td>
            </tr>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with <kbd>VueRouter</kbd></span></td>
            </tr>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with <kbd>Bootstrap</kbd></span></td>
            </tr>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with <kbd>VueX</kbd></span></td>
            </tr>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with <kbd>Firebase</kbd></span></td>
            </tr>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with <kbd>Axios</kbd></span></td>
            </tr>
            <tr>
              <td><span class="badge bg-warning">&#9889; Made with Love</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <div class="card text-center">
          <img :src="cuteImage" class="card-img-top" alt="Cute Image">
          <div class="card-body">
            <p class="blockquote-footer">This image was loaded from <b>assets folder</b></p>
            <p><kbd>{{ commonMessage }}</kbd></p>
          </div>
        </div>
      </div>
      <div class="col-4 align-self-center text-end">
        <table class="table">
          <tbody>
            <tr>
              <td><span class="badge bg-primary">&#127881; Supports reading from config</span></td>
            </tr>
            <tr>
              <td><span class="badge bg-primary">&#127881; Supports reading from environment variables</span></td>
            </tr>
            <tr>
              <td><span class="badge bg-primary">&#127881; Supports firebase login</span></td>
            </tr>
            <tr>
              <td><span class="badge bg-primary">&#127881; Supports services and API calls</span></td>
            </tr>
            <tr>
              <td><span class="badge bg-primary">&#127881; Supports custom themeing!</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <p class="spacer"></p>
    
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <h5 class="text-center">How to run?</h5>
        <p class="text-center">
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

      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>

import cuteImage from "@/assets/images/cute.png"
import config from "@/config/config"

export default {
  setup() {
    const commonMessage = config.commonMessage;

    return {
      commonMessage,
      cuteImage: cuteImage,
    }
  }
}
</script>