<script setup lang="ts">
    import OpenCardComponent from "./OpenCardComponent.vue";
    import OverdueCardComponent from "./OverdueCardComponent.vue";
    import BecomeDueCardComponent from "./BecomeDueCardComponent.vue";
    import DueCardComponent from "./DueCardComponent.vue";
    import DatatableComponent from './DatatableComponent.vue';

    defineProps(["data"]);
</script>

<template>
    <v-main>
        <v-container>
            <v-row dense>
                <v-col cols="3">
                    <OpenCardComponent v-bind:items="data.items"></OpenCardComponent>
                </v-col>
                <v-col cols="3">
                    <DueCardComponent v-bind:items="data.items"></DueCardComponent>
                </v-col>
                <v-col cols="3">
                    <BecomeDueCardComponent v-bind:items="data.items"></BecomeDueCardComponent>
                </v-col>
                <v-col cols="3">
                    <OverdueCardComponent v-bind:items="data.items"></OverdueCardComponent>
                </v-col>
                <v-col cols="12">
                    <DatatableComponent v-bind:items="data.items"></DatatableComponent>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>