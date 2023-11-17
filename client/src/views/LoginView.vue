<script setup lang="ts">
    import { useAuthStore } from "../stores/AuthStore";
    import { ref } from 'vue';

    const email = ref("");
    const password = ref("");
    let showPassword = ref(true);   
    const authStore = useAuthStore();

    // function requiredField (field: string) {
    //     return !!field || "Campo obrigatório"
    // }
</script>

<template>
    <v-container>
        <v-row class="justify-center">
            <v-col cols="4">
                <v-card class="bg-surface">
                    <v-card-item class="d-flex justify-center pa-5">
                        <v-card-title>Alvo de Cobrança</v-card-title>
                    </v-card-item>
                    <v-card-text class="d-flex justify-center">
                        <span class="text-h6">Bem vindo!</span>
                    </v-card-text>
                    <v-card-text>
                        <v-form>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="email" hide-details placeholder="Email" type="email" variant="outlined">
                                        <template v-slot:prepend-inner>
                                            <v-icon icon="mdi-email-outline" size="small"></v-icon>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="password" v-on:keydown.enter="authStore.login(email, password)" hide-details placeholder="Senha" :type="showPassword ? 'password' : 'text'" variant="outlined">
                                        <template v-slot:prepend-inner>
                                            <v-icon icon="mdi-lock-outline" size="small"></v-icon>
                                        </template>
                                        <template v-slot:append-inner>
                                            <v-icon v-on:click="showPassword = !showPassword" :icon="showPassword ? 'mdi-eye-outline' : 'mdi-eye-off-outline'" size="small"></v-icon>
                                        </template>
                                    </v-text-field>
                                </v-col>
                                <v-col class="d-flex justify-center" cols="12">
                                    <v-btn class="bg-surface-variant text-capitalize" v-on:click="authStore.login(email, password)">
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