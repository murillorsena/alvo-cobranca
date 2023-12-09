<script setup lang="ts">
    defineProps(["items"]);

    function teste (data: any[]) {
        let total = 0;
        for (const item of data) {
            for (const value of item.debits) {
                if (value.status === "open") {
                    total += value.amount;
                }
            }
        }
        return total;
    }

    function formatAmount (value: any): string {
        const options = {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 2
        };
        const amount = Number(value).toLocaleString("pt-BR", options);
        return amount;
    }
</script>

<template>
    <v-card variant="text">
        <v-card-item>
            <template v-slot:prepend>
                <v-avatar class="bg-success" rounded variant="flat">
                    <v-icon icon="mdi-clock-check-outline"></v-icon>
                </v-avatar>
            </template>
            <v-card-title class="font-weight-medium text-success">R$ 50.000,00</v-card-title>
            <!-- <v-card-title class="font-weight-medium text-success">{{ formatAmount(teste(items)) }}</v-card-title> -->
            <v-card-subtitle>À Vencer</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>