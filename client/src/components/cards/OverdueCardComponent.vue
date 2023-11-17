<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card color="error" variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-error" rounded variant="tonal">
                    <v-icon icon="mdi-arrow-bottom-left-thin"></v-icon>
                </v-avatar>
            </template>
            <v-card-title>R$ 70.000,00</v-card-title>
            <v-card-subtitle>Vencido</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>