<script setup lang="ts">
    import { ref } from "vue";

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

    const itemsPerPage = 5;

    let page = ref(1);

    let numberOfPages = (itemsLength: number) => {
        return Math.ceil(itemsLength / itemsPerPage);
    }
</script>

<template>
    <v-data-table :headers="headers" :items="items" :sort-by="sortColumns" :page="page" :items-per-page="itemsPerPage" height="250" density="compact" hide-default-footer>
        <template v-slot:bottom>
            <div class="text-center pt-2">
                <v-pagination v-model="page" :length="numberOfPages(items?.length)" rounded="circle" total-visible="4" density="compact">
                </v-pagination>
            </div>
        </template>
    </v-data-table>
</template>