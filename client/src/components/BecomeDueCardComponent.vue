<script setup lang="ts">
    defineProps(["amount"]);
</script>

<template>
    <v-card variant="text">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-warning" rounded variant="flat">
                    <v-icon icon="mdi-clock-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-warning">{{ amount }}</v-card-title>
            <v-card-subtitle>Vencendo (próx. 10 dias)</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>