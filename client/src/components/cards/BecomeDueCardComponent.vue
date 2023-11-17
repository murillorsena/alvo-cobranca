<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card color="warning" variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-warning" rounded variant="tonal">
                    <v-icon icon="mdi-arrow-top-right-thin"></v-icon>
                </v-avatar>
            </template>
            <v-card-title>R$ 30.000,00</v-card-title>
            <v-card-subtitle>Vencendo</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>