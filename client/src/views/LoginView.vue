<script setup lang="ts">
    import AuthService from "../services/AuthService";
    import { inject, reactive } from 'vue';

    const authService = inject("AuthService") as AuthService;

    const user = reactive({
        email: "mail@mail.com",
        password: "12345678"
    });
</script>

<template>
    <div>
        <h1>Login</h1>
        <form>
            <label for="email">Email</label>
            <div>
                <input type="email" required="true" v-model="user.email"/>
            </div>
            <label for="password">Senha</label>
            <div>
                <input type="password" required="true" minlength="8" maxlength="20" v-model="user.password"/>
            </div>
            <button class="button" type="submit" v-on="authService.login(user.email, user.password)">Entrar</button>
        </form>
    </div>
</template>

<style scoped>
    .button {
        font-size: 15px;
    }
</style>
