<script setup lang="ts">
    import { useAuthStore } from '../stores';
    import { useTheme } from 'vuetify';

    const authStore = useAuthStore();
    const userName = authStore.session.userName;
    const theme = useTheme();

    function toggleTheme () {
        theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    }
</script>

<template>
    <v-app-bar density="comfortable">
        <v-app-bar-title class="text-center">
            <span>SisCobaz</span>
        </v-app-bar-title>
        <template v-slot:append>
            <v-btn class="mx-1" v-on:click="toggleTheme" icon size="small">
                <v-icon :icon="!theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night'" size="large"></v-icon>
                <v-tooltip activator="parent" open-delay="500">{{ !theme.global.current.value.dark ? 'Claro' : 'Escuro' }}</v-tooltip>
            </v-btn>
        <v-menu width="15%">
                <template v-slot:activator="{ props }">
                    <v-avatar class="cursor-pointer" v-bind="props" size="small">
                        <v-img src="../../public/img-user.jpg"></v-img>
                    </v-avatar>
                </template>
                <v-list density="comfortable">
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-avatar size="small">
                                <v-img src="../../public/img-user.jpg"></v-img>
                            </v-avatar>
                        </template>
                        <v-list-item-title>{{ userName }}</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item link>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-account-outline" size="small"></v-icon>
                        </template>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-cog-outline" size="small"></v-icon>
                        </template>
                        <v-list-item-title>Configurações</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item v-on:click="authStore.logout()" link>
                        <template v-slot:prepend>
                            <v-icon icon="mdi-logout" size="small"></v-icon>
                        </template>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </template>
    </v-app-bar>
</template>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
    }
</style>