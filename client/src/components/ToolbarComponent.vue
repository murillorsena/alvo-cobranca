<script setup lang="ts">
    import { useAuthStore } from '../stores/AuthStore.js';
    const authStore = useAuthStore();
    const name = authStore.session.name;

    const logout = () => {
        authStore.logout();
    }
</script>

<template>
    <v-toolbar height="60" color="#242939">
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-center text-light">Sistema de Gestão de Cobrança</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-chip class="py-5" color="white" pill link @click="logout()">
            Olá, {{ name }}
            <v-avatar class="ml-2">
                <v-img src="../../public/img-user.jpg"></v-img>
            </v-avatar>
        </v-chip>
    </v-toolbar>
</template>

<style>
    .v-chip {
        background-color: transparent !important;
        color: currentColor !important;
    }

    .text-light {
        color: white;
    }
    /* .v-chip:before {
        background-color: currentColor;
        bottom: 0;
        border-radius: inherit;
        content: "";
        left: 0;
        opacity: 0;
        position: absolute;
        pointer-events: none;
        right: 0;
        top: 0;
    } */
</style>
