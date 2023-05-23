<script setup lang="ts">
    import ToolbarComponent from "../components/ToolbarComponent.vue";
    import CardComponent from "../components/CardComponent.vue";
    import DatatableComponent from "../components/DatatableComponent.vue";
    import ExpenseService from "../services/ExpenseService";
    import { inject, onMounted, reactive } from "vue";

    let data = reactive({ items: undefined });
    
    onMounted(async () => {
        const expenseService = inject("expenseService") as ExpenseService;
        const output = await expenseService.getExpenses();
        data.items = output;
    });
</script>
 
<template>
    <ToolbarComponent></ToolbarComponent>
    <main>
        <CardComponent v-model:items="data.items"></CardComponent>
        <DatatableComponent v-model:items="data.items"></DatatableComponent>
    </main>
</template>

<style scoped>
</style>
