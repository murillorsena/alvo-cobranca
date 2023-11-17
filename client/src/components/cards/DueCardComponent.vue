<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card color="success" variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-success" rounded variant="tonal">
                    <v-icon icon="mdi-arrow-top-right-thin"></v-icon>
                </v-avatar>
            </template>
            <v-card-title>R$ 30.000,00</v-card-title>
            <v-card-subtitle>À Vencer</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>