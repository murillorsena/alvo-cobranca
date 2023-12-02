<script setup lang="ts">
    import OpenCardComponent from "./cards/OpenCardComponent.vue";
    import OverdueCardComponent from "./cards/OverdueCardComponent.vue";
    import BecomeDueCardComponent from "./cards/BecomeDueCardComponent.vue";
    import DueCardComponent from "./cards/DueCardComponent.vue";
    import DatatableComponent from './DatatableComponent.vue';

    defineProps(["data"]);
</script>

<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <OpenCardComponent v-bind:items="data.items"></OpenCardComponent>
                </v-col>
                <v-col cols="3">
                    <OverdueCardComponent v-bind:items="data.items"></OverdueCardComponent>
                </v-col>
                <v-col cols="3">
                    <BecomeDueCardComponent v-bind:items="data.items"></BecomeDueCardComponent>
                </v-col>
                <v-col cols="3">
                    <DueCardComponent v-bind:items="data.items"></DueCardComponent>
                </v-col>
                <v-col class="pt-1" cols="12">
                    <DatatableComponent v-bind:items="data.items"></DatatableComponent>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>