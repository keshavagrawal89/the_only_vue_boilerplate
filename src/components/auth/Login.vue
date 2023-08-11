<template>
  <div>

            <label for="email">Email</label>
            <input v-model="email"
                class="form-control"
                id="email"
                required
            />
            <label for="password">Password</label>
            <input v-model="password"
                type="password"
                class="form-control"
                id="password"
                required
            />
        <button class="btn btn-primary" @click="login">Signin</button>  
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {
    name: "LoginVue",
    setup() {
        const store = useStore();
        const router = useRouter();

        const email = ref("");
        const password = ref("");

        const login = async () => {
            await store.dispatch("signIn", {
                email: email.value,
                password: password.value
            });
            router.push("/dashboard");
        }

        return {
            email,
            password,
            login
        }
    }
}
</script>

