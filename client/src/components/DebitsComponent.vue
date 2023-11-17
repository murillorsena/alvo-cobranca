<script setup lang="ts">
    import { defineProps, ref } from "vue";

    defineProps(["expenses"]);

    let page = ref(1);
    const itemsPerPage = 5;
    let search = ref("");

    function numberOfPages (itemsLength: number) {
        return Math.ceil(itemsLength / itemsPerPage);
    }

    function formatAmount (amount: number) {
        return (amount / 100).toFixed(2);
    }

    const tableHeaders: any[] = [
        { key: "description", title: "Descrição", align: "start"},
        { key: "dueDate", title: "Vencimento", align: "start"},
        { key: "amount", title: "Montante", align: "start"},
        { key: "delayedDays", title: "Atraso", align: "start"},
        { key: "status", title: "Status", align: "start"}
    ];

    const sortColumnsBy: any[] = [
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
    ];
</script>

<template>
    <v-card>
        <v-card-title class="mt-2">
            <v-responsive max-width="40%">
                <v-text-field v-model="search" label="Pesquisar" type="text" density="compact" variant="solo-filled" clearable single-line hide-details>
                    <template v-slot:prepend-inner>
                        <v-icon icon="mdi-magnify" size="small"></v-icon>
                    </template>
                </v-text-field>
            </v-responsive>
        </v-card-title>
        <v-card-text>
            <v-data-table :headers="tableHeaders" :items="expenses" :sort-by="sortColumnsBy" :page="page" :search="search" :items-per-page="itemsPerPage" height="250" density="compact" hide-default-footer :fixed-header="true">
                <template v-slot:item.amount="{ item }">
                    <span>R$ {{ formatAmount(item.columns.amount) }}</span>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip v-if="item.columns.status === 'À Vencer'" color="success" size="small">{{ item.columns.status }}</v-chip>
                    <v-chip v-if="item.columns.status === 'Vencendo'" color="warning" size="small">{{ item.columns.status }}</v-chip>
                    <v-chip v-if="item.columns.status === 'Vencido'" color="error" size="small">{{ item.columns.status }}</v-chip>
                </template>
                <template v-slot:bottom>
                    <div class="text-center pt-2">
                        <v-pagination v-model="page" density="compact" :length="numberOfPages(expenses?.length)" rounded="circle" total-visible="4"></v-pagination>
                    </div>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>