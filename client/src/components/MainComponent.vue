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
                    <OpenCardComponent class="mb-3" v-bind:items="data.items"></OpenCardComponent>
                    <OverdueCardComponent class="mb-3" v-bind:items="data.items"></OverdueCardComponent>
                    <BecomeDueCardComponent class="mb-3" v-bind:items="data.items"></BecomeDueCardComponent>
                    <DueCardComponent class="mb-3" v-bind:items="data.items"></DueCardComponent>
                </v-col>
                <v-col class="pl-0" cols="9">
                    <DatatableComponent v-bind:items="data.items"></DatatableComponent>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>