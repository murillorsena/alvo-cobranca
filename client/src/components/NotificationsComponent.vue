<script setup lang="ts">
    import { ref } from "vue";
 
    defineProps(["notifications"]);

    // let notifications: any = reactive({ notifications: undefined });

    // const props = defineProps(["notifications"]);
    // const notifications = props.notifications;

    let input = ref("");
    let iconMenu = ref("");

    function addNotification (input: string): void {
        if (!input) return;
        // const notification = {
        //     content: input
        // };
        // notifications.push(notification);
    }

    // function formatDate (data: Date): string {
    //     return new Date(data).toLocaleDateString("pt-BT")
    // }
</script>

<template>
    <!-- Contato realizado -->
    <!-- Email enviado -->
    <!-- Mensagem enviada -->
    <!-- Reunião agendada -->
    <!-- Notificação enviada -->
    <v-card class="bg-surface">
        <v-timeline class="pa-4" align="start" density="comfortable" line-inset="5" side="end" truncate-line="both">
            <v-timeline-item v-for="notification in notifications" dot-color="surface-variant" size="x-small">
                <!-- {{ notification }} -->
                {{ notification.createdAt }}
                <!-- <v-list-item>
                    <v-list-item-title>{{ notification.content }}</v-list-item-title>
                    <v-list-item-subtitle>{{ notification.content }}</v-list-item-subtitle>
                </v-list-item> -->
                <!-- <div class="d-flex justify-space-between">
                    <span class="text-subtitle-1">{{ notification.label }}</span>
                    <span class="text-subtitle-1">{{ formatDate(notification.createdAt) }}</span>
                </div>
                <p class="flex-wrap">{{ notification.content }}</p>
                <div class="d-flex align-center">
                    <v-avatar class="me-2" size="x-small">
                        <v-img v-if="notification.userName === 'Tim Clarkson'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1-aac046b6.png"></v-img>
                        <v-img v-if="notification.userName === 'Kane Frost'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-2-0ae005f8.png"></v-img>
                    </v-avatar>
                    <span>{{ notification.userName }}</span>
                </div> -->
            </v-timeline-item>
            <v-timeline-item dot-color="surface-variant" density="compact" size="x-small" width="500">
                <v-text-field v-model="input" v-on:keydown.enter="addNotification(input)" hide-details placeholder="Mensagem" variant="solo-filled">
                    <template v-slot:append-inner>
                        <v-btn id="menu" icon size="small" variant="text">
                            <v-icon :icon="iconMenu ? iconMenu : 'mdi-menu-down'"></v-icon>
                        </v-btn>
                    </template>
                    <v-menu activator="#menu">
                        <v-list>
                            <v-list-item v-on:click="iconMenu = 'mdi-phone-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-phone-outline" size="small"></v-icon>
                                </template>
                                <span>Contato</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-email-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-email-outline" size="small"></v-icon>
                                </template>
                                <span>Email</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-message-processing-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-message-processing-outline" size="small"></v-icon>
                                </template>
                                <span>Mensagem</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-laptop-account'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-laptop-account" size="small"></v-icon>
                                </template>
                                <span>Reunião</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-file-document-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-file-document-outline" size="small"></v-icon>
                                </template>
                                <span>Notificação</span>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-text-field>
            </v-timeline-item>
        </v-timeline>
    </v-card>
</template>