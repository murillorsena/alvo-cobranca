<script setup lang="ts">
    defineProps(["items"]);
    // const items = [
    //     {}
    // ];
    // const headers = [
    //     { text: 'Código', value: 'codigo' },
    //     { text: 'Lojista', value: 'lojista' },
    //     { text: 'Shopping', value: 'shopping' },
    //     { text: 'Especialista', value: 'especialista' },
    //     { text: 'Montante', value: 'montante' },
    //     { text: 'Maior atraso', value: 'maioratraso' }
    // ];
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
                <td class="title-text">{{ item.maiorAtraso }}</td>
            </tr>
        </tbody>
    </table>
    <!-- <div v-for="item in items"> -->
        <!-- <v-data-table :headers="headers" :items="items"></v-data-table> -->
    <!-- </div> -->
</template>

<style>
    table {
        /* width: 100%; */
        background-color: white; /* cor de fundo da tabela */
        border-radius: 4px; /* borda da tabela */
        margin-top: 20px;
    }

    tbody>tr:hover {
        color: black;
        opacity: 0.2;
        /* color: #fff; */
        /* background-color: green; */
    }

    tr>td {
        border-bottom: thin solid;
    }

    /* td {
        display: table-cell;
        vertical-align: inherit;
    } */

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

    .v-table-wrapper {
        border-radius: inherit;
        overflow-x: auto;
        overflow-y: hidden;
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

    .title-text {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        /* column-gap: $divider-gap; */
    }

    /* .title-text::before, ::after {
        border-block-end: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
        content: "";
    } */
    
    .title-text::after {
        flex: 1 1 auto;
    }

    /* .title-text::before {
        flex: 0 1 calc(variables.$vertical-nav-horizontal-padding-start - $divider-gap);
        margin-inline-start: -#{variables.$vertical-nav-horizontal-padding-start};
    } */
</style>
