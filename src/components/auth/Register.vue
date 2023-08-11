<template>
    <div>
      <b-form>
          <b-form-group
              label="Email">
              <b-form-input
                  required
              ></b-form-input>
          </b-form-group>
          <b-form-group
              label="Password">
              <b-form-input
              type="password"
                  required
              ></b-form-input>
          </b-form-group>      
          
          <b-button type="submit" variant="primary">Register</b-button>  
      </b-form>
    </div>
  </template>
  
  <script>
  export default {
      name: "RegisterVue"
  }
  </script>
  
  <style>
  
  </style>
  