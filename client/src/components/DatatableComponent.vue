<script setup lang="ts">
    defineProps(["items"]);
    const headers: any[] = [
        { key: "codigo", title: "Código", align: "start" },
        { key: "lojista", title: "Lojista", align: "start" },
        { key: "shopping", title: "Shopping", align: "start" },
        { key: "especialista", title: "Especialista", align: "start" },
        { key: "montante", title: "Montante", align: "start" },
        { key: "maiorAtraso", title: "Maior Atraso", align: "start" },
        { key: "actions", title: "Ações", align: "start", sortable: false },
    ];

    const search = "";

    const page = 1;

    const itemsPerPage = 5;

    const sortBy: any[] = [
        { key: "maiorAtraso", order: "desc"},
        { key: "montante", order: "desc"},
    ];

    let dialog = false;

    const numberOfPages = (itemsLength: number) => {
        return Math.ceil(itemsLength / itemsPerPage);
    }
</script>

<template>
    <v-container class="">
        <v-row>
            <v-col cols="12">
                <!-- <v-card class="pa-2 mb-3">
                    <v-spacer></v-spacer>
                    <v-text-field label="Buscar" append-inner-icon="mdi-magnify" hide-details single-line v-model="search"></v-text-field>
                </v-card> -->
                <v-sheet>
                    <v-card class="mx-auto">
                        <v-card-title>
                            <!-- <v-spacer></v-spacer> -->
                            <v-responsive max-width="400">
                                <v-text-field label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="underlined" single-line hide-details></v-text-field>
                            </v-responsive>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table v-model:page="page" :headers="headers" :items="items" :sort-by="sortBy" :search="search" :items-per-page="itemsPerPage" hide-default-footer multi-sort hover>
                                <template v-slot:item.actions="{ item }">
                                    <v-dialog>
                                        <template v-slot:activator="{ props }">
                                            <v-btn icon="mdi-dots-vertical" variant="text" size="small" v-bind="props" v-on:click="dialog = true"></v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>Informações</v-card-title>
                                            <div>Código: {{ item.raw.codigo }}</div>
                                            <div>Lojista: {{ item.raw.lojista }}</div>
                                            <div>Shopping: {{ item.raw.shopping }}</div>
                                            Dialog: {{ dialog }}
                                            <v-spacer></v-spacer>
                                            <v-card-actions>
                                                <v-btn v-on:click="dialog = false">Fechar</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </template>
                                <template v-slot:bottom>
                                    <div class="text-center pt-2">
                                        <v-pagination v-model="page" :length="numberOfPages(items?.length)" rounded="circle" total-visible="6">
                                        </v-pagination>
                                    </div>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    /* .v-data-table>td {
        max-width: 100%;
        box-shadow: rgba(47, 60, 74, 0.01) 0px 8px 32px, rgba(47, 60, 74, 0.02) 0px 8px 16px;
    } */
</style>
