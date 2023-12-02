<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <div v-for="item in items">
        <div v-for="debit in item.debits">
            {{ debit.status }}
        </div>
    </div>
    <!-- <v-card variant="tonal">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-info" rounded variant="flat">
                    <v-icon icon="mdi-wallet-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-info">R$ 100.000,00</v-card-title>
            <v-card-subtitle>Em Aberto</v-card-subtitle>
        </v-card-item>
    </v-card> -->
</template>