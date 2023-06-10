<script setup lang="ts">
    // import DatatablePaginationComponent from "../components/DatatablePaginationComponent.vue";
    import DatatableDetailComponent from "../components/DatatableDetailComponent.vue";
    import { ref } from "vue";
    // defineProps(["items"]);

    const items = [
        {
            storeCode: "10001",
            storeName: "LOJA 01",
            shoppingName: "BSWA",
            userName: "Tim Clarkson",
            amount: "R$ 46.000,00",
            delayedDays: 65,
            expenses: [
                {
                    description: "Aluguel Mínimo",
                    amount: "R$ 10.000,00",
                    dueDate: "05/04/2023",
                    delayedDays: 65
                }, {
                    description: "Encargo Condominial",
                    amount: "R$ 1.500,00",
                    dueDate: "10/04/2023",
                    delayedDays: 60
                }, {
                    description: "Aluguel Mínimo",
                    amount: "R$ 10.000,00",
                    dueDate: "05/05/2023",
                    delayedDays: 35
                }, {
                    description: "Encargo Condominial",
                    amount: "R$ 1.500,00",
                    dueDate: "10/05/2023",
                    delayedDays: 30
                }, {
                    description: "Aluguel Mínimo",
                    amount: "R$ 10.000,00",
                    dueDate: "05/06/2023",
                    delayedDays: 4
                }, {
                    description: "Encargo Condominial",
                    amount: "R$ 1.500,00",
                    dueDate: "10/06/2023",
                    delayedDays: -1
                }, {
                    description: "Aluguel Mínimo",
                    amount: "R$ 10.000,00",
                    dueDate: "05/07/2023",
                    delayedDays: -26
                }, {
                    description: "Encargo Condominial",
                    amount: "R$ 1.500,00",
                    dueDate: "10/07/2023",
                    delayedDays: -31
                }
            ]
        }, {
            storeCode: "10002",
            storeName: "LOJA 02",
            shoppingName: "BSAB",
            userName: "Kane Frost",
            amount: "R$ 2.900,00",
            delayedDays: 96,
            expenses: [
                {
                    description: "Aluguel Mínimo",
                    amount: "R$ 2.000,00",
                    dueDate: "05/03/2023",
                    delayedDays: 96
                }, {
                    description: "Encargo Condominial",
                    amount: "R$ 700,00",
                    dueDate: "10/06/2023",
                    delayedDays: 1
                }, {
                    description: "Aluguel Complementar",
                    amount: "R$ 200,00",
                    dueDate: "15/06/2023",
                    delayedDays: 6
                }
            ]    
        }, {
            storeCode: "10003",
            storeName: "LOJA 03",
            shoppingName: "BSCA",
            userName: "Kane Frost",
            amount: "R$ 800,00",
            delayedDays: 1,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 800,00",
                    dueDate: "10/06/2023",
                    delayedDays: 1
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "BSIP",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "BSCT",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "BSSL",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "BSNH",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "BSSP",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "PACL",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }, {
            storeCode: "10004",
            storeName: "LOJA 04",
            shoppingName: "MOSH",
            userName: "Kane Frost",
            amount: "R$ 100.000,00",
            delayedDays: 10,
            expenses: [
                {
                    description: "Encargo Condominial",
                    amount: "R$ 100.000,00",
                    dueDate: "30/05/2023",
                    delayedDays: 10
                }
            ]    
        }
    ];

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

    const itemsPerPage = 8;

    const sortBy: any[] = [
        { key: "delayedDays", order: "desc"},
        { key: "amount", order: "desc"},
    ];

    let dialog = false;

    let numberOfPages = (itemsLength: number) => {
        return Math.ceil(itemsLength / itemsPerPage);
    }

    // const messages: any = [
    //     {
    //         from: "Murillo",
    //         message: "Oi, tudo bem?",
    //         time: "2023-06-03"
    //     }, {
    //         from: "L",
    //         message: "tudo certo",
    //         time: "2023-06-03"
    //     }
    // ];
</script>

<template>
    <v-card>
        <v-card-title>
            Débitos em Aberto
            <v-spacer></v-spacer>
            <v-responsive max-width="400">
                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="outlined" single-line hide-details></v-text-field>
            </v-responsive>
        </v-card-title>
        <v-card-text>
            <v-data-table height="400" v-model:page="page" :headers="headers" :items="items" :sort-by="sortBy" :search="search" :items-per-page="itemsPerPage" no-data-text="Não há dados disponíveis" hide-default-footer hover density="compact">
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
                                                        <DatatableDetailComponent v-model:items="item.raw.expenses"></DatatableDetailComponent>
                                                    </v-card-text>
                                                </v-card>
                                            </div>
                                            <!-- <div class="col-12 col-lg-9">
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
                                            </div> -->
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
</template>

<!-- <template>
    <v-container>
        <v-row>
            <v-col cols="9">
                <v-sheet>
                    <v-card>
                        <v-card-title>
                            <v-spacer></v-spacer>
                            <v-responsive max-width="400">
                                <v-text-field v-model="search" label="Pesquisar" prepend-inner-icon="mdi-magnify" variant="underlined" single-line hide-details></v-text-field>
                            </v-responsive>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table v-model:page="page" :headers="headers" :items="items" :sort-by="sortBy" :search="search" :items-per-page="itemsPerPage" no-data-text="Não há dados disponíveis" hide-default-footer hover density="compact">
                                <template v-slot:item.actions="{ item }">
                                    <v-dialog>
                                        <template v-slot:activator="{ props }">
                                            <v-btn icon="mdi-dots-vertical" variant="text" size="small" v-bind="props" v-on:click="dialog = true"></v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-text>
                                                <v-form>
                                                    <v-container>
                                                        <v-row>
                                                            <div class="col-12 col-lg-3">
                                                                <v-card>
                                                                    <v-card-title>Informações</v-card-title>
                                                                    <hr role="separator">
                                                                    <v-card-text>
                                                                        <DatatableDetailComponent v-model:items="item.raw.expenses"></DatatableDetailComponent>
                                                                    </v-card-text>
                                                                </v-card>
                                                            </div>
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
            <v-col cols="3">
                <v-card>
                    <v-card-title>Maiores Devedores</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template> -->

<style scoped>
</style>