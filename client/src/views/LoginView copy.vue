<script setup lang="ts">
    import { useAuthStore } from "../stores/AuthStore";
    import { ref } from 'vue';

    const email = ref("");
    const password = ref("");

    const authStore = useAuthStore();
</script>

<template>
    <div>
        <h1>Login</h1>
        <form>
            <label for="email">Email</label>
            <div>
                <input type="email" required="true" v-model="email"/>
            </div>
            <label for="password">Senha</label>
            <div>
                <input type="password" required="true" minlength="8" maxlength="20" v-model="password"/>
            </div>
            <button class="button" @click="authStore.login(email, password)">Entrar</button>
        </form>
    </div>
</template>

<style scoped>
    .button {
        font-size: 15px;
    }
</style>
