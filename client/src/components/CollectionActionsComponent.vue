<script setup lang="ts">
    import { CollectionActionsHistory } from "../domain/entity";
    import { CollectionActionService } from "../services";
    import { DomainEvent } from "../events";
    import { inject, ref } from "vue";

    const props = defineProps(["store", "user", "actions"]);

    const history = new CollectionActionsHistory(props.actions);
    const collectionActionService = inject("collectionActionService") as CollectionActionService;

    history.on("addCollectionAction", async function (event: DomainEvent) {
        const output = await collectionActionService.add(event.data);
        console.log("props.actions: ", props.actions);
        console.log("output: ", output);
        props.actions.push(output);
        console.log("props.actions add: ", props.actions);
    });

    let content = ref("");
    let selectedItem = ref([]) as any;
    let iconMenu = ref("");

    const listProps: any[] = [
        { key: 1, type: 'call', title: 'Contato realizado', text: 'Contato', icon: 'mdi-phone-outline' },
        { key: 2, type: 'whatsapp', title: 'Whatsapp enviado', text: 'Whatsapp', icon: 'mdi-whatsapp' },
        { key: 3, type: 'message', title: 'Mensagem enviada', text: 'Messagem', icon: 'mdi-message-processing-outline' },
        { key: 4, type: 'email', title: 'Email enviado', text: 'Email', icon: 'mdi-email-outline' },
        { key: 5, type: 'meeting', title: 'Reunião agendada', text: 'Reunião', icon: 'mdi-laptop-account' },
        { key: 6, type: 'notification', title: 'Notificação enviada', text: 'Notificação', icon: 'mdi-file-document-outline' }
    ];

    function formatLocaleTime (value: any): string {
        const date = new Date(value);
        const options: any = {
            hour: "numeric",
            minute: "numeric"
        };
        return date.toLocaleTimeString("pt-BR", options);
    }

    function getTypeOfSelectedItem (selectedItem: any): string {
        return selectedItem ? selectedItem.type : selectedItem;
    }
</script>

<template>
    <v-card rounded="0">
        Store: {{ store }}
        User: {{ user }}
        <v-virtual-scroll class="mt-3" v-if="actions.length > 0" height="300" :items="actions">
            <template v-slot:default="{ item }: any">
                <!-- <v-list-subheader>
                    <span>Today</span>
                </v-list-subheader> -->
                <v-list-item class="mb-5">
                    <template v-slot:prepend>
                        <v-avatar rounded size="small" variant="tonal">
                            <div v-for="prop in listProps">
                                <v-icon v-if="item.type === prop.type" :icon="prop.icon" size="small"></v-icon>
                            </div>
                        </v-avatar>
                    </template>
                    <!-- <v-list-item-title>
                        <div v-for="prop in listProps">
                            <span v-if="item.type === prop.type">{{ prop.title }}</span>
                        </div>
                    </v-list-item-title> -->
                    <v-list-item-subtitle>
                        <div class="font-weight-medium">
                            <span class="text-primary">{{ item.username }}, {{ formatLocaleTime(item.createdAt) }}h</span>
                            - {{ item.content }}
                        </div>
                    </v-list-item-subtitle>
                </v-list-item>
            </template>
        </v-virtual-scroll>
        <div v-else class="d-flex justify-center">Sem ações de cobrança</div>
        <v-card-text>
            <v-responsive>
                <v-text-field v-model="content" v-on:keydown.enter="history.addCollectionAction({ type: getTypeOfSelectedItem(selectedItem[0]), content, storeId: store, userId: user })" density="comfortable" hide-details placeholder="Mensagem" type="text" variant="solo-filled">
                    <template v-slot:append-inner>
                        <v-btn id="menu" icon size="small" variant="text">
                            <v-icon :icon="iconMenu ? iconMenu : 'mdi-menu-down'"></v-icon>
                        </v-btn>
                        <v-tooltip activator="parent" open-delay="500">
                            <span>Tipo de Ação</span>
                        </v-tooltip>
                    </template>
                    <v-menu activator="#menu">
                        <v-list v-model:selected="selectedItem">
                            <v-list-item v-on:click="iconMenu = props.icon" v-for="props in listProps" :key="props.key" :value="props" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" :icon="props.icon" size="small"></v-icon>
                                </template>
                                <span>{{ props.text }}</span>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-text-field>
            </v-responsive>
        </v-card-text>
    </v-card>
</template>