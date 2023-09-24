<script setup lang="ts">
    import OpenCardComponent from "./OpenCardComponent.vue";
    import OverdueCardComponent from "./OverdueCardComponent.vue";
    import DueCardComponent from "./DueCardComponent.vue";

    defineProps(["items"]);
</script>

<template>
    <div v-if="items">
        <OpenCardComponent :items="items"></OpenCardComponent>
        <OverdueCardComponent :items="items"></OverdueCardComponent>
        <DueCardComponent :items="items"></DueCardComponent>
    </div>
</template>