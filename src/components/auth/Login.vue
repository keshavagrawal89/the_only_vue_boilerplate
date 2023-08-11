<template>
  <div>
    <b-form>
        <b-form-group
            label="Email">
            <b-form-input v-model="email"
                required
            ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Password">
            <b-form-input
            type="password"
            v-model="password"
                required
            ></b-form-input>
        </b-form-group>      

        <b-button variant="primary" @click="login">Signin</b-button>  
    </b-form>
  </div>
</template>

<script>
export default {
    name: "LoginVue",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async login() {
            await this.$store.dispatch("signIn", {
                email: this.email,
                password: this.password
            });
            this.$router.push("/dashboard");
        }
    }
}
</script>

