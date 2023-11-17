<script setup lang="ts">
    // import NavigationComponent from "../components/NavigationComponent.vue";
    import AppBarComponent from "../components/AppBarComponent.vue";
    import MainComponent from "../components/MainComponent.vue";
    import { ExpenseService } from "../services";
    import { inject, onMounted, reactive } from "vue";
    // import Expense from "../domain/entity/Expense.js";
    import { items } from "../data";


    // const theme = localStorage.getItem("theme");

    // let data: { items: Expense[] | undefined } = reactive({ items: undefined });
    let data: any = reactive({ items: undefined });
    
    // let theme = ref(true);

    onMounted (async () => {
        const expenseService = inject("expenseService") as ExpenseService;
        const output = await expenseService.getExpenses();
        console.log(output);
        // console.log("store name: ", output[0]);
        
        data.items = items;
    });

    // function log (value: boolean) {
    //     theme.value = value;
    // }
</script>
 
<template>
    <AppBarComponent></AppBarComponent>
    <MainComponent style="background-color: 145, 85, 253;" v-bind:data="data"></MainComponent>
</template>

<!-- <template>
    <v-app v-bind:theme="theme ? 'light' : 'dark'">
        <AppBarComponent v-on:changed-theme="log"></AppBarComponent>
        <MainComponent v-bind:data="data"></MainComponent>
    </v-app>
</template> -->../data