<script setup lang="ts">
    import { ref } from "vue";

    defineProps(["debits"]);

    let page = ref(1);
    // const itemsPerPage = 5;
    const itemsPerPage = 6;
    let search = ref("");

    function numberOfPages (itemsLength: number) {
        return Math.ceil(itemsLength / itemsPerPage);
    }

    function formatAmount (amount: number) {
        return (amount / 100).toFixed(2);
    }

    function resolveStatusVariant (status: string) {
        switch (status) {
            case 'due': return { color: 'primary', text: 'À Vencer' };
            case 'becomeDue': return { color: 'primary', text: 'Vencendo' };
            case 'overdue': return { color: 'primary', text: 'Vencido' };
        }
    }

    const tableHeaders: any[] = [
        { key: "description", title: "Descrição", align: "start", width: "30%" },
        { key: "dueDate", title: "Vencimento", align: "start", width: "15%" },
        { key: "amount", title: "Montante", align: "start", width: "20%" },
        { key: "delayedDays", title: "Atraso", align: "start", width: "10%" },
        { key: "status", title: "Status", align: "start", width: "15%" }
    ];

    const sortColumnsBy: any[] = [
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
    ];
</script>

<template>
    <v-card rounded="0" height="100%">
    <!-- <v-card color="white" height="450" rounded="0"> -->
        <v-card-title class="mt-2">
            <v-responsive max-width="30%">
                <v-text-field v-model="search" clearable density="compact" hide-details label="Pesquisar" variant="solo-filled" single-line type="text">
                    <template v-slot:prepend-inner>
                        <v-icon icon="mdi-magnify" size="small"></v-icon>
                    </template>
                </v-text-field>
            </v-responsive>
        </v-card-title>
        <v-card-text>
            <v-data-table density="compact" fixed-header :headers="tableHeaders" hide-default-footer :items="debits" :items-per-page="itemsPerPage" :page="page" :search="search" :sort-by="sortColumnsBy">
            <!-- <v-data-table density="compact" fixed-header :headers="tableHeaders" height="500" max-height="100%" hide-default-footer :items="expenses" :items-per-page="itemsPerPage" :page="page" :search="search" :sort-by="sortColumnsBy"> -->
            <!-- <v-data-table density="compact" height="330" :fixed-header="true" :headers="tableHeaders" hide-default-footer :items="expenses" :items-per-page="itemsPerPage" :page="page" :search="search" :sort-by="sortColumnsBy"> -->
                <template v-slot:item.amount="{ item }">
                    <span>{{ item.columns.amount.toLocaleString("pt-br", { style: "currency", currency: "BRL", minimumFractionDigits: 2 }) }}</span>
                </template>
                <template v-slot:item.dueDate="{ item }">
                    <span>{{ new Date(item.columns.dueDate).toLocaleDateString("pt-br") }}</span>
                </template>
                <template v-slot:item.status="{ item }">
                    <v-chip v-if="item.columns.status === 'open'" color="success" size="small">À Vencer</v-chip>
                    <v-chip v-if="item.columns.status === 'becoming due'" color="warning" size="small">Vencendo</v-chip>
                    <v-chip v-if="item.columns.status === 'overdue'" color="error" size="small">Vencido</v-chip>
                </template>
                <template v-slot:bottom>
                    <div class="text-center pt-2">
                        <v-pagination v-model="page" density="compact" :length="numberOfPages(debits?.length)" rounded="circle" total-visible="4"></v-pagination>
                    </div>
                </template>
                <template v-slot:no-data>
                    <span>Nenhum dado foi encontrado</span>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>