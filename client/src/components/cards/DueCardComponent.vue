<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-success" rounded variant="flat">
                    <v-icon icon="mdi-clock-check-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-success">R$ 50.000,00</v-card-title>
            <v-card-subtitle>À Vencer</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>