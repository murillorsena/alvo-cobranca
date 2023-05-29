<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <!-- <div>
        <v-table class="px-sm-16" fixed-header height="450">
            <thead>
                <tr>
                    <th class="text-start" aria-sort="none">Código</th>
                    <th class="text-start" aria-sort="none">Lojista</th>
                    <th class="text-start" aria-sort="none">Shopping</th>
                    <th class="text-start" aria-sort="none">Especialista</th>
                    <th class="text-start" aria-sort="ascending">Montante</th>
                    <th class="text-start" aria-sort="ascending">Maior atraso</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td class="text-start">{{ item.codigo }}</td>
                    <td class="text-start">{{ item.lojista }}</td>
                    <td class="text-start">{{ item.shopping }}</td>
                    <td class="text-start">{{ item.especialista }}</td>
                    <td class="text-start">{{ item.montante }}</td>
                    <td class="title-text">{{ item.maiorAtraso }}</td>
                </tr>
            </tbody>
        </v-table>
    </div> -->
    <v-data-table></v-data-table>
</template>

<style>
</style>
