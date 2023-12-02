<script setup lang="ts">
    import { ref } from "vue";
    
    const props = defineProps(["actions"]);
    const actions = props.actions;

    let content = ref("");
    let iconMenu = ref("");
    let selectedItem = ref([]) as any;

    const items: any[] = [
        { key: 1, type: 'call', title: 'Contato realizado', text: 'Contato', icon: 'mdi-phone-outline' },
        { key: 2, type: 'whatsapp', title: 'Whatsapp enviado', text: 'Whatsapp', icon: 'mdi-whatsapp' },
        { key: 3, type: 'message', title: 'Mensagem enviada', text: 'Messagem', icon: 'mdi-message-processing-outline' },
        { key: 4, type: 'email', title: 'Email enviado', text: 'Email', icon: 'mdi-email-outline' },
        { key: 5, type: 'meeting', title: 'Reunião agendada', text: 'Reunião', icon: 'mdi-laptop-account' },
        { key: 6, type: 'notification', title: 'Notificação enviada', text: 'Notificação', icon: 'mdi-file-document-outline' }
    ];

    function addNotification (content: string): void {
        if (!content) return;
        const selected = selectedItem.value[0];
        if (!selected) return;
        const notification = {
            type: selected.type,
            title: selected.title,
            content,
            createdAt: new Date()
        };
        actions.push(notification);
        selectedItem.value = [];
    }

    function formatDate (data: Date): string {
        return new Date(data).toLocaleDateString("pt-BT")
    }
</script>

<template>
    <v-card rounded="0">
        <v-list width="700" lines="two">
            <!-- <v-list-subheader>
                <span>Today</span>
            </v-list-subheader> -->
            <v-list-item v-for="(action, index) in actions" :key="index">
                <template v-slot:prepend>
                    <v-avatar rounded size="small" variant="tonal">
                        <v-icon v-if="action.type === 'call'" icon="mdi-phone-outline" size="small"></v-icon>
                        <v-icon v-if="action.type === 'whatsapp'" icon="mdi-whatsapp" size="small"></v-icon>
                        <v-icon v-if="action.type === 'message'" icon="mdi-message-processing-outline" size="small"></v-icon>
                        <v-icon v-if="action.type === 'email'" icon="mdi-email-outline" size="small"></v-icon>
                        <v-icon v-if="action.type === 'meeting'" icon="mdi-laptop-account" size="small"></v-icon>
                        <v-icon v-if="action.type === 'notification'" icon="mdi-file-document-outline" size="small"></v-icon>
                    </v-avatar>
                </template>
                <v-list-item-title>{{ action.title }}</v-list-item-title>
                <v-list-item-subtitle>
                    <div class="font-weight-medium">
                        <span class="text-primary">{{ action.username }}, {{ new Date(action.createdAt).toLocaleDateString("pt-br") }}</span>
                        <!-- <span class="text-primary">{{ action.username }}, {{ new Date(action.createdAt).toLocaleTimeString("pt-br") }}h</span> -->
                        - {{ action.content }}
                    </div>
                </v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <v-card-text>
            <v-text-field v-model="content" v-on:keydown.enter="addNotification(content)" hide-details placeholder="Mensagem" variant="solo-filled" width="700">
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
                        <v-list-item v-on:click="iconMenu = item.icon" v-for="item in items" :key="item.key" :value="item" link>
                            <template v-slot:prepend>
                                <v-icon class="mr-3" :icon="item.icon" size="small"></v-icon>
                            </template>
                            <span>{{ item.text }}</span>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-text-field>
        </v-card-text>
    </v-card>
</template>