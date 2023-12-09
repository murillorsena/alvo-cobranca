<script setup lang="ts">
    import { Debit } from "../domain/entity";
    import { ref } from "vue";

    const props = defineProps(["debits"]);
    const debits: Debit[] = props.debits;

    let page = ref(1);
    let search = ref("");
    const itemsPerPage = 6;
    
    const tableHeaders: any[] = [
        { key: "description", title: "Descrição", align: "start", width: "30%" },
        { key: "dueDate", title: "Vencimento", align: "start", width: "15%" },
        { key: "amount", title: "Montante", align: "start", width: "20%" },
        { key: "delayedDays", title: "Atraso", align: "start", width: "10%" },
        { key: "status", title: "Status", align: "start", width: "15%" }
    ];

    const sortColumnsBy: any[] = [
        { key: "dueDate", order: "asc"},
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
    ];

    const chips: any[] = [
        { key: "paid", text: "Pago", color: "info" },
        { key: "open", text: "À Vencer", color: "success" },
        { key: "becoming due", text: "Vencendo", color: "warning" },
        { key: "overdue", text: "Vencido", color: "error" },
    ];

    function numberOfPages (itemsLength: number = 0): number {
        return Math.ceil(itemsLength / itemsPerPage);
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

    function formatDueDate (value: any): string {
        const date = new Date(value);
        return date.toLocaleDateString("pt-BR");
    }
</script>

<template>
    <v-card rounded="0" height="100%">
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
                <template v-slot:item.dueDate="{ item }">
                    <span>{{ formatDueDate(item.raw.dueDate) }}</span>
                </template>
                <template v-slot:item.amount="{ item }">
                    <span>{{ formatAmount(item.raw.amount) }}</span>
                </template>
                <template v-slot:item.status="{ item }">
                    <div v-for="chip in chips">
                        <v-chip v-if="chip.text === item.raw.status" :color="chip.color" :text="chip.text" size="small"></v-chip>
                    </div>
                </template>
                <template v-slot:bottom>
                    <v-pagination v-model="page" density="compact" :length="numberOfPages(debits?.length)" total-visible="4"></v-pagination>
                </template>
                <template v-slot:no-data>
                    <span>Nenhum registro foi encontrado</span>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>