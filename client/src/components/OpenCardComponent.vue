<script setup lang="ts">
    defineProps(["items"]);
    
    function calculateOpenAmount (data: any[]): number {
        let total = 0;
        for (const item of data) {
            for (const expense of item.expenses) {
                total += expense.amount;
            }
        }
        return total;
    }

    function formatAmount (amount: number): string {
        const result = amount.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2
        });
        return result;
    }
</script>

<template>
    <v-card class="mb-4" height="80">
        <v-card-title>
            <span>{{ formatAmount(calculateOpenAmount(items)) }}</span>
        </v-card-title>
        <v-card-subtitle>
            <span>Em Aberto</span>
        </v-card-subtitle>
    </v-card>
</template>