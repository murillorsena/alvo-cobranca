<script setup lang="ts">
    import DetailListComponent from "./DetailListComponent.vue";
    import { ref } from "vue";

    defineProps(["items"]);

    const headers: any[] = [
        { key: "storeCode", title: "Código", align: "start", width: "5%" },
        { key: "storeName", title: "Lojista", align: "start", width: "20%" },
        { key: "shoppingName", title: "Shopping", align: "start", width: "10%" },
        { key: "userName", title: "Especialista", align: "start", width: "5%" },
        { key: "amount", title: "Montante", align: "start", width: "15%" },
        { key: "delayedDays", title: "Maior Atraso", align: "start", width: "10%" },
        { key: "actions", title: "Ações", align: "start", sortable: false, width: "5%" }
    ];

    let search = ref("");
    let page = ref(1);
    const itemsPerPage = 7;
    const sortBy: any[] = [
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
    ];
    
    function numberOfPages (itemsLength: number = 0) {
        return Math.ceil(itemsLength / itemsPerPage);
    }
</script>

<template>
    <v-card variant="tonal">
        <v-card-item>
            <v-card-title class="mt-2">
                <v-responsive max-width="30%">
                    <v-text-field v-model="search" label="Pesquisar" type="text" density="compact" variant="solo-filled" clearable single-line hide-details>
                        <template v-slot:prepend-inner>
                            <v-icon icon="mdi-magnify" size="small"></v-icon>
                        </template>
                    </v-text-field>
                </v-responsive>
            </v-card-title>
            <!-- <template v-slot:append>
                <v-btn icon size="small" variant="text">
                    <v-icon icon="mdi-refresh" size="large"></v-icon>
                </v-btn>
            </template> -->
            <!-- <v-card-actions>
            </v-card-actions> -->
    </v-card-item>
        <v-card-text>
            <v-data-table height="100%" v-model:page="page" density="compact" :headers="headers" :items="items" :sort-by="sortBy" :search="search" :items-per-page="itemsPerPage" hide-default-footer hover>
                <template v-slot:item.userName="{ item }">
                    <v-avatar size="x-small">
                        <v-img v-if="item.columns.userName === 'Tim Clarkson'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1-aac046b6.png"></v-img>
                        <v-img v-if="item.columns.userName === 'Kane Frost'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-2-0ae005f8.png"></v-img>
                        <v-tooltip activator="parent" location="right" open-delay="500">
                            <span>{{ item.columns.userName }}</span>
                        </v-tooltip>
                    </v-avatar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <DetailListComponent v-bind:item="item.selectable"></DetailListComponent>
                </template>
                <template v-slot:bottom>
                    <div class="text-center pt-2">
                        <v-pagination v-model="page" density="compact" :length="numberOfPages(items?.length)" rounded="circle" total-visible="4"></v-pagination>
                    </div>
                </template>
                <template v-slot:no-data>
                    <span>Nenhum dado foi encontrado</span>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>