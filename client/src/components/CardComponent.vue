<script setup lang="ts">
    // const props = defineProps(["items"]);
    
    // function getTotal () {
    //     let total = 0;
    //     props.items.forEach(element => {
    //         total += Number(element.montante);
    //     });
    //     return formatTotal(total);
    // }

    // function formatTotal (value: number) {
    //     return value.toLocaleString(
    //         "pt-br", {
    //         style: "currency",
    //         currency: "BRL",
    //         minimumFractionDigits: 2
    //     })
    // }
</script>

<template>
    <div class="container pt-6">
        <div class="cards">
            <div class="card card-total">
                <h3>R$ 19.754.927,54</h3>
                <h4>Carteira</h4>
            </div>
            <div class="card">
                <h3>R$ 18.440.457,09</h3>
                <h4>Corrente</h4>
            </div>
            <div class="card">
                <h3>R$ 1.314.470,45</h3>
                <h4>Renegociação</h4>
            </div>
        </div>
    </div>
</template>

<style>
    /* main {
        padding: 75px 0px 0px;
    } */

    .container {
        width: 100%;
        padding: 12px;
        margin-right: auto;
        margin-left: auto;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        flex: 1 1 auto;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: auto;
        margin: -12px;
        justify-content: center;
        align-items: center;
    }

    .card {
        background-color: white;
        /* align-items: center; */
        padding: 12px;
        margin: 0 50px;
        height: 100px;
        width: 210px;
        /* max-width: 25%; */
        border-radius: 4px;
        /* flex-direction: column; */
        /* display: flex; */
        /* justify-content: center!important;; */
        /* align-items: center!important; */
        /* position: relative; */
        /* vertical-align: top; */
    }

    .card.card-total {
        background-color: darkgray;
    }

    .pt-4 {
        padding-top: 16px!important;
    }

    .pt-6 {
        padding-top: 24px!important;
    }

    .v-application .white {
        background-color: #fff!important;
        border-color: #fff!important;
    }
</style>
