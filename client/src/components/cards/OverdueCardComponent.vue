<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-error" rounded variant="flat">
                    <v-icon icon="mdi-clock-alert-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="text-error">R$ 20.000,00</v-card-title>
            <v-card-subtitle>Vencido</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>