<script setup lang="ts">
    defineProps(["items"]);
</script>

<template>
    <table align="center">
        <thead>
            <tr>
                <th class="text-start sortable" aria-sort="none">Código</th>
                <th class="text-start sortable" aria-sort="none">Lojista</th>
                <th class="text-start sortable" aria-sort="none">Shopping</th>
                <th class="text-start sortable" aria-sort="none">Especialista</th>
                <th class="text-start sortable" aria-sort="ascending">Montante</th>
                <th class="text-start sortable" aria-sort="ascending">Maior atraso</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items">
                <td class="text-start">{{ item.codigo }}</td>
                <td class="text-start">{{ item.lojista }}</td>
                <td class="text-start">{{ item.shopping }}</td>
                <td class="text-start">{{ item.especialista }}</td>
                <td class="text-start">{{ item.montante }}</td>
                <td class="text-start">{{ item.maiorAtraso }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
    /* div {
        box-sizing: border-box;
    } */
    /* .v-data-table>.v-data-table__wrapper>table>tbody>tr>td, .v-data-table>.v-data-table__wrapper>table>tfoot>tr>td, .v-data-table>.v-data-table__wrapper>table>thead>tr>td {
        font-size: .875rem;
        height: 48px;
    } */

    th.sortable {
        pointer-events: auto;
        cursor: pointer;
        outline: 0;
    }

    th, td {
        padding: 0 40px;
    }

    table {
        /* border-bottom: thin solid rgba(0,0,0,.12); */
        /* border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px; */
        background-color: white;
        border-radius: 4px;
        margin-top: 20px;
    }

    .table-theme {
        background-color: #fff;
        border-color: #fff;
        border-top-color: black;
        border-right-color: black;
        border-bottom-color: black;
        border-left-color: black;
        color: black;
    }

    /* td {
        display: table-cell;
        vertical-align: inherit;
    } */

    /* tr {
        display: table-row;
        vertical-align: inherit;
        border-color: black;
    } */

    .text-start {
        text-align: start!important;
    }
</style>
