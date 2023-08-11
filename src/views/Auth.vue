<template>
    <div class="d-flex justify-content-center align-items-center">
        <div class="container">
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="signin-tab" data-bs-toggle="tab" data-bs-target="#signin" role="tab">
                                Sign In
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="register-tab" data-bs-toggle="tab" data-bs-target="#register" role="tab">
                                Register
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                            <login-vue></login-vue>
                        </div>
                        <div class="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                            <register-vue></register-vue>
                        </div>
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
        </div>
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