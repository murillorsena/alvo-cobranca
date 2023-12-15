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
        props.actions.push(output);
        content.value = "";
        iconMenu.value = "mdi-menu-down";
    });

    let content = ref("");
    let selectedItem = ref([]) as any;
    let iconMenu = ref("");

    const loggedUser = {
        id: localStorage.getItem("userId") as string,
        name: localStorage.getItem("userName") as string
    }

    const listProps: any[] = [
        { key: 1, type: 'call', title: 'Contato realizado', text: 'Contato', icon: 'mdi-phone-outline' },
        { key: 2, type: 'whatsapp', title: 'Whatsapp enviado', text: 'Whatsapp', icon: 'mdi-whatsapp' },
        { key: 3, type: 'message', title: 'Mensagem enviada', text: 'Messagem', icon: 'mdi-message-processing-outline' },
        { key: 4, type: 'email', title: 'Email enviado', text: 'Email', icon: 'mdi-email-outline' },
        { key: 5, type: 'meeting', title: 'Reunião agendada', text: 'Reunião', icon: 'mdi-laptop-account' },
        { key: 6, type: 'notification', title: 'Notificação enviada', text: 'Notificação', icon: 'mdi-file-document-outline' }
    ];

    function formatLocaleDate (value: any): string {
        const date = new Date(value);
        const options: any = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        };
        return date.toLocaleDateString("pt-BR", options);
    }

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
        <v-virtual-scroll class="mt-3" v-if="actions.length > 0" :items="actions">
            <template v-slot:default="{ item }: any">
                <v-list-item class="mb-5">
                    <template v-slot:prepend>
                        <v-avatar rounded size="small" variant="tonal">
                            <div v-for="prop in listProps">
                                <v-icon v-if="item.type === prop.type" :icon="prop.icon" size="small"></v-icon>
                            </div>
                        </v-avatar>
                    </template>
                    <v-list-item-subtitle>
                        <div class="font-weight-medium">
                            <span class="text-primary">{{ item.username }}, {{ formatLocaleDate(item.createdAt) }} às {{ formatLocaleTime(item.createdAt) }}h</span>
                            - {{ item.content }}
                        </div>
                    </v-list-item-subtitle>
                </v-list-item>
            </template>
        </v-virtual-scroll>
        <div v-else class="d-flex justify-center">Sem ações de cobrança registradas</div>
        <v-card-text>
            <v-responsive>
                <v-text-field v-model="content" v-on:keydown.enter="history.addCollectionAction({ type: getTypeOfSelectedItem(selectedItem[0]), content, storeId: store, userId: user })" density="comfortable" hide-details placeholder="Digite sua mensagem..." type="text" variant="solo-filled">
                    <template v-slot:append-inner>
                        <v-btn id="menu" icon size="small" variant="text">
                            <v-icon :icon="iconMenu ? iconMenu : 'mdi-menu-down'"></v-icon>
                            <v-tooltip activator="parent" open-delay="500">
                                <span>Tipo de Ação</span>
                            </v-tooltip>
                        </v-btn>
                        <v-btn v-on:click="history.addCollectionAction({ type: getTypeOfSelectedItem(selectedItem[0]), content, storeId: store, userId: loggedUser.id })" type="submit">Enviar</v-btn>
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