<script setup lang="ts">
    import { useAuthStore } from '../stores';
    import { ref } from "vue";

    defineEmits(["changedTheme"]);

    const authStore = useAuthStore();
    const name = authStore.session.name;

    let theme = ref(true);

    function toggleTheme () {
        theme.value = !theme.value;
        localStorage.setItem("theme", theme.value ? "light" : "dark");
        // emit("changedTheme", theme.value);
    }
</script>

<template>
    <v-app-bar density="comfortable">
        <v-app-bar-title class="text-center">
            <span>Alvo de Cobranca</span>
        </v-app-bar-title>
        <template v-slot:append>
            <v-btn v-on:click="toggleTheme" icon size="small">
                <v-icon :icon="theme ? 'mdi-weather-sunny' : 'mdi-weather-night'" size="large"></v-icon>
                <v-tooltip activator="parent" open-delay="500">{{ theme ? 'Claro' : 'Escuro' }}</v-tooltip>
            </v-btn>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-avatar class="cursor-pointer" v-bind="props" size="small">
                        <v-img src="../../public/img-user.jpg"></v-img>
                    </v-avatar>
                </template>
                <v-list density="comfortable">
                    <v-list-item>
                        <template v-slot:prepend>
                            <v-avatar class="mr-3" size="small">
                                <v-img src="../../public/img-user.jpg"></v-img>
                            </v-avatar>
                        </template>
                        <v-list-item-title>{{ name }}</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item link>
                        <template v-slot:prepend>
                            <v-icon class="mr-3" icon="mdi-account-outline" size="small"></v-icon>
                        </template>
                        <v-list-item-title>Perfil</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <template v-slot:prepend>
                            <v-icon class="mr-3" icon="mdi-cog-outline" size="small"></v-icon>
                        </template>
                        <v-list-item-title>Configurações</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item v-on:click="authStore.logout()" link>
                        <template v-slot:prepend>
                            <v-icon class="mr-3" icon="mdi-logout" size="small"></v-icon>
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