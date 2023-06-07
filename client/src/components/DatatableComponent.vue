<script setup lang="ts">
    // import DatatablePaginationComponent from "../components/DatatablePaginationComponent.vue";
    import { ref } from "vue";
    defineProps(["items"]);
    const headers: any[] = [
        { key: "storeCode", title: "Código", align: "start" },
        { key: "storeName", title: "Lojista", align: "start" },
        { key: "shoppingName", title: "Shopping", align: "start" },
        { key: "userName", title: "Especialista", align: "start" },
        { key: "amount", title: "Montante", align: "start" },
        { key: "delayedDays", title: "Maior Atraso", align: "start" },
        { key: "actions", title: "Ações", align: "start", sortable: false },
    ];

    let search = ref("");

    let page = ref(1);

    const itemsPerPage = 5;

    const sortBy: any[] = [
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
    ];

    let dialog = false;

    let numberOfPages = (itemsLength: number) => {
        return Math.ceil(itemsLength / itemsPerPage);
    }

    const messages: any = [
        {
            from: "Murillo",
            message: "Oi, tudo bem?",
            time: "2023-06-03"
        }, {
            from: "L",
            message: "tudo certo",
            time: "2023-06-03"
        }
    ];
</script>

<template>
    <v-container class="">
        <v-row>
            <v-col cols="12">
                <v-sheet>
                    <v-card class="mx-auto">
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <v-responsive max-width="400">
                                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="underlined" single-line hide-details></v-text-field>
                            </v-responsive>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table v-model:page="page" :headers="headers" :items="items" :sort-by="sortBy" :search="search" :items-per-page="itemsPerPage" no-data-text="Não há dados disponíveis" hide-default-footer hover>
                                <template v-slot:item.actions="{ item }">
                                    <v-dialog>
                                        <template v-slot:activator="{ props }">
                                            <v-btn icon="mdi-dots-vertical" variant="text" size="small" v-bind="props" v-on:click="dialog = true"></v-btn>
                                        </template>
                                        <v-card>
                                            <!-- <v-card-title>Informações</v-card-title> -->
                                            <v-card-text>
                                                <v-form>
                                                    <v-container>
                                                        <v-row>
                                                            <div class="col-12 col-lg-3">
                                                                <v-card>
                                                                    <v-card-title>Informações</v-card-title>
                                                                    <hr role="separator">
                                                                    <v-card-text>
                                                                        <v-list lines="two" variant="elevated">
                                                                            <v-list-item v-for="(key, value) in item.raw" :key="key" :value="value">
                                                                            <!-- <v-list-item v-for="value in item.raw"> -->
                                                                                <!-- <div>Código</div>
                                                                                <div>{{ value.storeCode }}</div>
                                                                                <div>Lojista</div>
                                                                                <div>{{ value.storeCode }}</div> -->
                                                                                <!-- Código {{ value.storeCode }} -->
                                                                                <!-- {{ value.storeName }} -->
                                                                                <v-list-item-title>{{ value }}</v-list-item-title>
                                                                                <v-list-item-subtitle> {{ key }}</v-list-item-subtitle>
                                                                            </v-list-item>
                                                                        </v-list>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </div>
                                                            <div class="col-12 col-lg-9">
                                                                <v-card>
                                                                    <v-card-title>Acionamentos</v-card-title>
                                                                    <v-card-text>
                                                                        <v-timeline density="compact" align="start">
                                                                            <v-timeline-item v-for="message in messages" :key="message.time" size="x-small">
                                                                                <div class="mb-4">
                                                                                    <div class="font-weight-normal">{{ message.from }} @{{ message.time }}</div>
                                                                                    {{ message.message }}
                                                                                </div>
                                                                            </v-timeline-item>
                                                                        </v-timeline>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </div>
                                                            <!-- <v-col cols="3">
                                                                <v-text-field :model-value="item.raw.codigo" label="Código" variant="solo" readonly></v-text-field>
                                                            </v-col>
                                                            <v-col cols="3">
                                                                <v-text-field :model-value="item.raw.lojista" label="Lojista" variant="solo" readonly></v-text-field>
                                                            </v-col>
                                                            <v-col cols="3">                                            
                                                                <v-text-field :model-value="item.raw.shopping" label="Shopping" variant="solo" readonly></v-text-field>
                                                            </v-col> -->
                                                            <!-- <v-col cols="3">                                            
                                                                <v-text-field :model-value="item.raw.representatives[0].name" label="Representante" variant="solo" readonly></v-text-field>
                                                            </v-col> -->
                                                            <!-- <v-col cols="6">
                                                                <v-card>
                                                                    <v-card-title>Acionamentos</v-card-title>
                                                                    <v-card-text>
                                                                        <v-timeline density="compact" align="start">
                                                                            <v-timeline-item v-for="message in messages" :key="message.time" size="x-small">
                                                                                <div class="mb-4">
                                                                                    <div class="font-weight-normal">{{ message.from }} @{{ message.time }}</div>
                                                                                    {{ message.message }}
                                                                                </div>
                                                                            </v-timeline-item>
                                                                        </v-timeline>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </v-col> -->
                                                        </v-row>
                                                    </v-container>
                                                </v-form>
                                                <v-spacer></v-spacer>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-btn v-on:click="dialog = false">Fechar</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </template>
                                <template v-slot:bottom>
                                    <!-- <DatatablePaginationComponent v-bind:items="items" v-bind:page="page" v-bind:itemsPerPage="itemsPerPage"></DatatablePaginationComponent> -->
                                    <div class="text-center pt-2">
                                        <v-pagination v-model="page" :length="numberOfPages(items?.length)" rounded="circle" total-visible="4">
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

<style scoped>
</style>
