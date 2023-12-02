<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-warning" rounded variant="flat">
                    <v-icon icon="mdi-clock-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-warning">R$ 30.000,00</v-card-title>
            <v-card-subtitle>Vencendo</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>