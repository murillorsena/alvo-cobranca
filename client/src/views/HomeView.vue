<script setup lang="ts">
    import AppBarComponent from "../components/AppBarComponent.vue";
    import MainComponent from "../components/MainComponent.vue";
    import { ExpenseService } from "../services";
    import { inject, onMounted, reactive } from "vue";
    // import Expense from "../domain/entity/Expense.js";
    import { items } from "../data";

    // let data: { items: Expense[] | undefined } = reactive({ items: undefined });
    let data: any = reactive({ items: undefined });
    
    // let theme = ref(true);

    onMounted (async () => {
        const expenseService = inject("expenseService") as ExpenseService;
        const output = await expenseService.getExpenses();
        data.items = output;
        // data.items = items;
    });
</script>
 
<template>
    <AppBarComponent></AppBarComponent>
    <MainComponent v-bind:data="data"></MainComponent>
</template>