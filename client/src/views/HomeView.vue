<script setup lang="ts">
    import AppBarComponent from "../components/AppBarComponent.vue";
    import MainComponent from "../components/MainComponent.vue";
    import { DebitService } from "../services";
    import { inject, onMounted, reactive } from "vue";

    let data: any = reactive({ items: [] });

    onMounted (async () => {
        const debitService = inject("debitService") as DebitService;
        const output = await debitService.getDebits();
        data.items = output;
    });
</script>
 
<template>
    <AppBarComponent></AppBarComponent>
    <MainComponent v-bind:data="data"></MainComponent>
</template>