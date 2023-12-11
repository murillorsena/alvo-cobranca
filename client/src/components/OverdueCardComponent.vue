<script setup lang="ts">
    defineProps(["amount"]);
</script>

<template>
    <v-card variant="text">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-error" rounded variant="flat">
                    <v-icon icon="mdi-clock-alert-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-error">{{ amount }}</v-card-title>
            <v-card-subtitle>Vencido</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>