<script setup lang="ts">
    import RegisterComponent from "./RegisterComponent.vue";
    import DebitsComponent from "./DebitsComponent.vue";
    import CollectionActionsComponent from "./CollectionActionsComponent.vue";
    import RepresentativeComponent from "./RepresentativeComponent.vue";
    import { ref } from "vue";

    defineProps(["item"]);

    let isDialogVisible = ref(false);
    let currentTab = ref(0);

    const tabs: any[] = [
        { text: 'Débitos em Aberto', icon: 'mdi-view-list' },
        { text: 'Ações de Cobrança', icon: 'mdi-history' },
        { text: 'Representantes', icon: 'mdi-account-group-outline' }
    ];
</script>

<template>
    <v-btn v-on:click="isDialogVisible = true" icon size="small" variant="text">
        <v-icon icon="mdi-clipboard-search-outline"></v-icon>
        <v-tooltip activator="parent" location="right" open-delay="500">Exibir</v-tooltip>
    </v-btn>
    <!-- <v-dialog v-model="dialog" max-width="900" persistent> -->
    <v-dialog class="fill-height" v-model="isDialogVisible" height="85%" width="95%" persistent scrollable>
        <!-- <v-card color="background" height="100%"> -->
        <v-card class="overflow-y-hidden" color="background" height="100%">
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-on:click="isDialogVisible = false" icon size="small" variant="plain">
                    <v-icon icon="mdi-close"></v-icon>
                </v-btn>
            </v-card-actions>
            <v-card-text>
                <v-row>
                    <v-col cols="4">
                        <RegisterComponent :register="item"></RegisterComponent>
                    </v-col>
                    <v-col cols="8">
                        <v-card>
                            <v-tabs v-model="currentTab" align-tabs="center" density="compact" grow selected-class="v-tabs-pill">
                                <v-tab v-for="tab in tabs">
                                    <v-icon :icon="tab.icon" start></v-icon>
                                    <span>{{ tab.text }}</span>
                                </v-tab>
                            </v-tabs>
                            <v-divider></v-divider>
                            <v-window v-model="currentTab">
                                <v-window-item>
                                    <DebitsComponent :debits="item.debits"></DebitsComponent>
                                </v-window-item>
                                <v-window-item>
                                    <CollectionActionsComponent :store="item.storeId" :user="item.userId" :actions="item.actions"></CollectionActionsComponent>
                                </v-window-item>
                                <v-window-item>
                                    <RepresentativeComponent :representatives="item.representatives"></RepresentativeComponent>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<style scoped>
    .v-tabs-pill {
        background-color: orange;
    }
</style>