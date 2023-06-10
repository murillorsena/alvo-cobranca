<script setup lang="ts">
    defineProps(["items"]);

    const headers: any[] = [
        { key: "description", title: "Descrição", align: "start", sortable: true },
        { key: "dueDate", title: "Vencimento", align: "start", sortable: true },
        { key: "amount", title: "Montante", align: "start", sortable: true },
        { key: "delayedDays", title: "Dias de Atraso", align: "start", sortable: true }
    ];

    const sortColumns: any[] = [
        { key: "delayedDays", order: "desc" },
        { key: "amount", order: "desc" }
    ];
</script>

<template>
    <v-data-table :headers="headers" :items="items" :sort-by="sortColumns" density="compact">
    </v-data-table>
</template>