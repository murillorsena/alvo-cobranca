<script setup lang="ts">
    import { useAuthStore } from "../stores/AuthStore";
    import { ref } from 'vue';

    const email = ref("");
    const password = ref("");
    const authStore = useAuthStore();
</script>

<template>
    <!-- <div class="page-wrap">
        <div class="session-form-hold">
            <div class="mx-auto">
                <v-card class="text-center" width="250">
                    <h2 class="text-disabled font-weight-medium pa-2">Login</h2>
                    <v-text-field class="pa-2" type="email" label="E-mail" variant="underlined" required v-model="email"></v-text-field>
                    <v-text-field class="pa-2" type="password" label="Senha" variant="underlined" required v-model="password"></v-text-field>
                    <v-btn class="mb-4" size="small" v-on:click="authStore.login(email, password)">Entrar</v-btn>
                </v-card>
            </div>
        </div>
    </div> -->
    <container class="pt-6">
        <v-row>
            <v-col cols="3">
                <v-card>
                    <v-card-title class="text-center">
                        Login
                    </v-card-title>
                    <v-card-text>
                        <v-text-field class="pa-2" type="email" label="E-mail" variant="underlined" required v-model="email"></v-text-field>
                        <v-text-field class="pa-2" type="password" label="Senha" variant="underlined" required v-model="password"></v-text-field>
                        <v-btn class="mb-4" size="small" v-on:click="authStore.login(email, password)">Entrar</v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </container>
</template>

<style scoped>
    .page-wrap {
        background-color: #242939!important;
        display: flex;
        align-items: center;
        padding: 40px 1rem;
        height: 100%;
        min-height: 100vh;
    }
    .session-form-hold {
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }
</style>
