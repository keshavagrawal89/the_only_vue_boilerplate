<template>
    <div class="justify-content-center align-items-center">
        <b-container>
            <b-row>
                <b-col cols="4"></b-col>
                <b-col cols="4">
                    <b-tabs>
                        <b-tab title="Sign In" active>
                            <login-vue></login-vue>
                        </b-tab>
                        <b-tab title="Register">
                            <register-vue></register-vue>
                        </b-tab>
                    </b-tabs>
                </b-col>
                <b-col cols="4"></b-col>
            </b-row>
        </b-container>
        <!-- Add your login and signup form here -->

    </div>
</template>
<script>
import LoginVue from '../components/auth/Login.vue';
import RegisterVue from '../components/auth/Register.vue';
export default {
    name: "Auth",
    components: {
        LoginVue,
        RegisterVue,
    }
}
</script>