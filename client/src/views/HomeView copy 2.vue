<script setup lang="ts">
    import ToolbarComponent from "../components/ToolbarComponent.vue.js";
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
        <div class="v-pagination">
            <button class="v-btn">
                <img class="v-icon" src="../../public/chevron_left.png" height="32">
            </button>
            <button class="v-btn">
                <span class="v-btn-text">1</span>
            </button>
            <button class="v-btn-enable">
                <span class="v-btn-text">2</span>
            </button>
            <button class="v-btn">
                <span class="v-btn-text">3</span>
            </button>
            <button class="v-btn">
                <span class="v-btn-text">4</span>
            </button>
            <button class="v-btn">
                <span class="v-btn-text">5</span>
            </button>
            <button class="v-btn">
                <img class="v-icon" src="../../public/chevron_right.png" height="32">
            </button>
        </div>
    </main>
</template>

<style scoped>
    .v-pagination {
        /* prepend-icon=disabled, rounded=yes, append-icon=enabled, overflow=no */
        /* Auto layout */
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 2px;
        gap: 6px;
        width: 430px;
        height: 52px;
        /* Inside auto layout */
        flex: none;
        order: 4;
        flex-grow: 0;
    }

    .v-btn-enable {
        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        gap: 10px;
        width: 48px;
        height: 48px;
        border-radius: 9999px;
        /* Inside auto layout */
        flex: none;
        order: 3;
        flex-grow: 0;
    }
    .v-btn {
        /* Auto layout */
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 15px;
        gap: 10px;
        width: 48px;
        height: 48px;
        background: rgba(0, 0, 0, 0.12);
        border-radius: 9999px;
        /* Inside auto layout */
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .v-btn-text {
        width: 8px;
        height: 16px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 1.25px;
        color: rgba(0, 0, 0, 0.87);
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .v-icon {
        width: 26px;
        height: 26px;
        /* Inside auto layout */
        flex: none;
        order: 0;
        flex-grow: 0;
    }
</style>
