<script setup lang="ts">
    defineProps(["items"]);
    
    function calculateOverdueAmount (data: any[]): number {
        let total = 0;
        for (const item of data) {
            for (const expense of item.expenses) {
                if (expense.delayedDays > 0) {
                    total += expense.amount;
                }
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
            <span class="text-error">{{ formatAmount(calculateOverdueAmount(items)) }}</span>
        </v-card-title>
        <v-card-subtitle>
            <span>Vencido</span>
        </v-card-subtitle>
    </v-card>
</template>