<script setup lang="ts">
    import ToolbarComponent from "../components/ToolbarComponent.vue";
    import CardsComponent from "../components/CardsComponent.vue";
    import DatatableComponent from "../components/DatatableComponent.vue";
    // import ExpenseService from "../services/ExpenseService";
    // import { inject, onMounted, reactive } from "vue";
    // import Expense from "../domain/entity/Expense.js";
    import { onMounted, reactive } from "vue";
    import { items } from "./data";

    // let data: { items: Expense[] | undefined } = reactive({ items: undefined });
    let data: any = reactive({ items: undefined });

    onMounted(async () => {
        // const expenseService = inject("expenseService") as ExpenseService;
        // const output = await expenseService.getExpenses();
        // console.log(output);
        // console.log("store name: ", output[0]);
        
        data.items = items;
    });
</script>
 
<template>
    <ToolbarComponent></ToolbarComponent>
    <v-container>
        <v-row>
            <v-col cols="3">
                <CardsComponent :items="data.items"></CardsComponent>
            </v-col>
            <v-col cols="9">
                <DatatableComponent :items="data.items"></DatatableComponent>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
</style>