<script setup lang="ts">
    defineProps(["amount"]);
</script>

<template>
    <v-card variant="text">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-info" rounded variant="flat">
                    <v-icon icon="mdi-wallet-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-info">{{ amount }}</v-card-title>
            <v-card-subtitle>Em Aberto</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>