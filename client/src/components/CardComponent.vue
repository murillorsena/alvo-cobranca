<script setup lang="ts">
    // import { ref } from "vue";
    defineProps(["items"]);
    // const data: any = items;
    // console.log(data);
</script>

<template>
    <v-container>
        <!-- {{ items }} -->
        <v-row class="d-flex justify-center">
            <v-col cols="4">
                <v-card class="mx-auto" height="80" width="300">
                    <v-card-title>
                        <h4>R$ 19.754.927,54</h4>
                    </v-card-title>
                    <v-card-subtitle>
                        Carteira
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card class="mx-auto" height="80" width="300">
                    <v-card-title>
                        <h4>R$ 18.440.457,09</h4>
                    </v-card-title>
                    <v-card-subtitle>
                        Corrente
                    </v-card-subtitle>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card class="mx-auto" height="80" width="300">
                    <v-card-title>
                        <h4>R$ 1.314.470,45</h4>
                    </v-card-title>
                    <v-card-subtitle>
                        Renegociação
                    </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
