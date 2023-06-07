<script setup lang="ts">
    import ToolbarComponent from "../components/ToolbarComponent.vue";
    import CardComponent from "../components/CardComponent.vue";
    import DatatableComponent from "../components/DatatableComponent.vue";
    import ExpenseService from "../services/ExpenseService";
    import { inject, onMounted, reactive } from "vue";
    import Expense from "../domain/entity/Expense.js";

    let data: { items: Expense[] | undefined } = reactive({ items: undefined });
    
    onMounted(async () => {
        const expenseService = inject("expenseService") as ExpenseService;
        const output = await expenseService.getExpenses();
        console.log("store name: ", output[0]);
        data.items = output;
    });
</script>
 
<template>
    <ToolbarComponent></ToolbarComponent>
    <CardComponent v-model:items="data.items"></CardComponent>
    <DatatableComponent v-model:items="data.items"></DatatableComponent>
</template>

<style scoped>
</style>
