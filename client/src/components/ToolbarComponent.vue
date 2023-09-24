<script setup lang="ts">
    import { useAuthStore } from '../stores/AuthStore.js';

    const authStore = useAuthStore();
    const name = authStore.session.name;
</script>

<template>
    <v-toolbar height="60" color="#242939">
        <v-toolbar-title class="text-center text-light">
            A-Cobranca - Sistema de Gestão de Cobrança
        </v-toolbar-title>
        <v-menu location="bottom end">
            <template v-slot:activator="{ props }">
                <v-chip class="transparent no-color py-5" color="white" link pill v-bind="props">
                    Olá, {{ name }}
                    <v-avatar class="ml-2">
                        <v-img src="../../public/img-user.jpg"></v-img>
                    </v-avatar>
                </v-chip>
            </template>
            <div style="background-color: white;">
                <v-btn prepend-icon="mdi-logout-variant" v-on:click="authStore.logout()">Logout</v-btn>
            </div>
        </v-menu>
    </v-toolbar>
</template>

<style>
    .text-light {
        color: white;
    }
</style>