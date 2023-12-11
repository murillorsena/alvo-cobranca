<script setup lang="ts">
    import OpenCardComponent from "./OpenCardComponent.vue";
    import DueCardComponent from "./DueCardComponent.vue";
    import BecomeDueCardComponent from "./BecomeDueCardComponent.vue";
    import OverdueCardComponent from "./OverdueCardComponent.vue";
    import DatatableComponent from './DatatableComponent.vue';

    defineProps(["data"]);

    function calculateOpenAmount (data: any[]) {
        let total = 0;
        for (const item of data) {
            for (const value of item.debits) {
                if (value.status !== "Pago") {
                    total += value.amount;
                }
            }
        }
        return total;
    }

    function calculateDueAmount (data: any[]) {
        let total = 0;
        for (const item of data) {
            for (const value of item.debits) {
                if (value.status === "À Vencer") {
                    total += value.amount;
                }
            }
        }
        return total;
    }

    function calculateBecomeAmount (data: any[]) {
        let total = 0;
        for (const item of data) {
            for (const value of item.debits) {
                if (value.status === "Vencendo") {
                    total += value.amount;
                }
            }
        }
        return total;
    }

    function calculateOverdueAmount (data: any[]) {
        let total = 0;
        for (const item of data) {
            for (const value of item.debits) {
                if (value.status === "Vencido") {
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
    <v-main>
        <v-container>
            <v-row dense>
                <v-col cols="3">
                    <OpenCardComponent v-bind:amount="formatAmount(calculateOpenAmount(data.items))"></OpenCardComponent>
                </v-col>
                <v-col cols="3">
                    <DueCardComponent v-bind:amount="formatAmount(calculateDueAmount(data.items))"></DueCardComponent>
                </v-col>
                <v-col cols="3">
                    <BecomeDueCardComponent v-bind:amount="formatAmount(calculateBecomeAmount(data.items))"></BecomeDueCardComponent>
                </v-col>
                <v-col cols="3">
                    <OverdueCardComponent v-bind:amount="formatAmount(calculateOverdueAmount(data.items))"></OverdueCardComponent>
                </v-col>
                <v-col cols="12">
                    <DatatableComponent v-bind:items="data.items"></DatatableComponent>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>