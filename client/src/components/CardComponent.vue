<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <v-card class="mb-4" height="80">
        <v-card-title>
            <span>R$ 19.754.927,54</span>
        </v-card-title>
        <v-card-subtitle>
            <span>Em Aberto</span>
        </v-card-subtitle>
    </v-card>
    <v-card class="mb-4" height="80">
        <v-card-title>
            <span>R$ 18.440.457,09</span>
        </v-card-title>
        <v-card-subtitle>
            <span class="text-error">Vencido</span>
        </v-card-subtitle>
    </v-card>
    <v-card class="mb-4" height="80">
        <v-card-title>
            <span><strong>R$ 1.314.470,45</strong></span>
        </v-card-title>
        <v-card-subtitle>
            <span class="text-success">À Vencer</span>
        </v-card-subtitle>
    </v-card>
</template>

<style scoped>
    .v-card-title {
        font-family: Arial;
    }
</style>