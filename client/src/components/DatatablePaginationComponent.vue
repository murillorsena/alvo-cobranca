<script setup lang="ts">
    import { ref } from "vue";

    const props = defineProps(["items", "page", "itemsPerPage"]);    

    let page = ref(1);

    let itemsPerPage = props.itemsPerPage;

    let numberOfPages = (itemsLength: number) => {
        return Math.ceil(itemsLength / itemsPerPage);
    }
</script>

<template>
    <div class="text-center pt-2">
        <v-pagination v-model="page" :length="numberOfPages(items?.length)" rounded="circle" total-visible="4">
        </v-pagination>
    </div>
</template>
