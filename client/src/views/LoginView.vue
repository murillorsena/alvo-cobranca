<script setup lang="ts">
    import { useAuthStore } from "../stores/AuthStore";
    import { ref } from 'vue';

    const authStore = useAuthStore();
    const email = ref("");
    const password = ref("");
    let showPassword = ref(true);

    const valid = ref(true);
    const loading = ref(false);
    
    async function submit (email: string, password: string) {
        try {
            loading.value = true;
            valid.value = true;
            await authStore.login(email, password);
            loading.value = false;
        } catch (error: any) {
            loading.value = false;
            valid.value = false;
            console.log(error);
        }
    }
</script>

<template>
    <v-container class="fill-height">
        <v-row justify="center">
            <v-col cols="4">
                <v-card max-width="448">
                    <v-card-item class="d-flex justify-center pa-5">
                        <v-card-title class="text-h5">SisCobaz</v-card-title>
                    </v-card-item>
                    <v-card-text class="d-flex justify-center">
                        <span class="text-h6">Bem vindo!</span>
                    </v-card-text>
                    <v-card-text>
                        <v-form v-model="valid" v-on:submit.prevent="submit(email, password)" ref="form" validate-on="submit lazy">
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="email" hide-details placeholder="Email" type="email" variant="outlined">
                                        <template v-slot:prepend-inner>
                                            <v-icon icon="mdi-email-outline" size="small"></v-icon>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="password" v-on:keydown.enter hide-details placeholder="Senha" :type="showPassword ? 'password' : 'text'" variant="outlined">
                                        <template v-slot:prepend-inner>
                                            <v-icon icon="mdi-lock-outline" size="small"></v-icon>
                                        </template>
                                        <template v-slot:append-inner>
                                            <v-icon v-on:click="showPassword = !showPassword" :icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" size="small"></v-icon>
                                        </template>
                                    </v-text-field>
                                    <v-alert class="mt-5" v-if="!valid" closable density="comfortable" type="error" variant="outlined">
                                        <v-alert-title>Credenciais inválidas</v-alert-title>
                                        <p>Verifique se o email ou a senha foram digitados corretamente.</p>
                                    </v-alert>
                                </v-col>
                                <v-col class="d-flex justify-center" cols="12">
                                    <v-btn class="bg-surface-variant text-capitalize" :loading="loading" type="submit">
                                        <template v-slot:prepend>
                                            <v-icon icon="mdi-login"></v-icon>
                                        </template>
                                        <span>Entrar</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>