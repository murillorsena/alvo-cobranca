<script setup lang="ts">
    import DetailListComponent from "./DetailListComponent.vue";
    import { ref } from "vue";

    defineProps(["items"]) as any;

    let search = ref("");
    let page = ref(1);
    const itemsPerPage = 7;

    const tableHeaders: any[] = [
        { key: "storeCode", title: "Código", align: "start", width: "5%" },
        { key: "storeName", title: "Lojista", align: "start", width: "20%" },
        { key: "shoppingName", title: "Shopping", align: "start", width: "10%" },
        { key: "userName", title: "Especialista", align: "start", width: "5%" },
        { key: "amount", title: "Montante", align: "start", width: "15%" },
        { key: "delayedDays", title: "Maior Atraso", align: "start", width: "10%" },
        { key: "actions", title: "Ações", align: "start", sortable: false, width: "5%" }
    ];

    const sortColumnsBy: any[] = [
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
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
            <v-data-table height="100%" v-model:page="page" density="compact" :headers="tableHeaders" :items="items" :sort-by="sortColumnsBy" :search="search" :items-per-page="itemsPerPage" hide-default-footer hover>
                <template v-slot:item.userName="{ item }: any">
                    <v-avatar color="primary" size="x-small">
                        <v-img v-if="item.raw.userName === 'Tim Clarkson'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1-aac046b6.png"></v-img>
                        <v-img v-if="item.raw.userName === 'Kane Frost'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-2-0ae005f8.png"></v-img>
                        <v-tooltip activator="parent" location="right" open-delay="500">
                            <span>{{ item.raw.userName }}</span>
                        </v-tooltip>
                        <!-- <span>{{ item.raw.userName.slice(0, 2).toUpperCase() }}</span> -->
                    </v-avatar>
                </template>
                <template v-slot:item.amount="{ item }: any">
                    <div>{{ formatAmount(item.raw.amount) }}</div>
                </template>
                <template v-slot:item.actions="{ item }: any">
                    <DetailListComponent v-bind:item="item.selectable"></DetailListComponent>
                </template>
                <template v-slot:bottom>
                    <v-pagination v-model="page" density="compact" :length="numberOfPages(items?.length)" total-visible="4"></v-pagination>
                </template>
                <template v-slot:no-data>
                    <span>Nenhum registro foi encontrado</span>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>