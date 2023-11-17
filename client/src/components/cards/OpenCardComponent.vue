<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card color="info" variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-info" rounded variant="tonal">
                    <v-icon icon="mdi-currency-usd"></v-icon>
                </v-avatar>
            </template>
            <v-card-title>R$ 100.000,00</v-card-title>
            <v-card-subtitle>Em Aberto</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>