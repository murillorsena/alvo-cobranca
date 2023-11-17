<script setup lang="ts">
    import RegisterComponent from "./RegisterComponent.vue";
    import DebitsComponent from "./DebitsComponent.vue";
    import NotificationsComponent from "./NotificationsComponent.vue";
    // import RepresentativeComponent from "./RepresentativeComponent.vue";
    import { defineProps, ref } from "vue";

    defineProps(["item"]);

    let dialog = ref(false);
    let currentTab = ref(0);
</script>

<template>
    <v-dialog v-model="dialog" height="900" max-width="90%">
        <template v-slot:activator>
            <v-btn v-on:click="dialog = true" icon size="small" variant="text">
                <v-icon icon="mdi-clipboard-search-outline"></v-icon>
                <v-tooltip activator="parent" location="right" open-delay="500">Exibir</v-tooltip>
            </v-btn>
        </template>
        <v-card>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="dialog = false" icon size="small" variant="plain">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <RegisterComponent :register="item"></RegisterComponent>
                    </v-col>
                    <v-col class="pl-0" cols="8">
                        <v-tabs v-model="currentTab" align-tabs="center" bg-color="surface-variant" density="compact" fixed-tabs>
                            <v-tab>
                                <v-icon icon="mdi-view-list" start></v-icon>
                                <span>Débitos em Aberto</span>
                            </v-tab>
                            <v-tab>
                                <v-icon icon="mdi-chart-timeline-variant" start></v-icon>
                                <span>Ações de Cobrança</span>
                            </v-tab>
                            <!-- <v-tab>
                                <v-icon icon="mdi-account-group-outline" start></v-icon>
                                <span class="text-capitalize">Representantes</span>
                            </v-tab> -->
                        </v-tabs>
                        <v-window v-model="currentTab">
                            <v-window-item>
                                <DebitsComponent v-bind:expenses="item.expenses"></DebitsComponent>
                            </v-window-item>
                            <v-window-item>
                                <NotificationsComponent v-bind:notifications="item.notifications"></NotificationsComponent>
                            </v-window-item>
                            <!-- <v-window-item>
                                <RepresentativeComponent v-bind:representatives="item.representatives"></RepresentativeComponent>
                            </v-window-item> -->
                        </v-window>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>