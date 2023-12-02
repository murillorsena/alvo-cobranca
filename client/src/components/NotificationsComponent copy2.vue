<script setup lang="ts">
    import { ref } from "vue";
    
    const props = defineProps(["notifications"]);
    const notifications = props.notifications;

    // let label = ref("");
    let content = ref("");
    let iconMenu = ref("");

    function addNotification (content: string): void {
        if (!content) return;
        const notification = {
            content,
            createdAt: new Date()
        };
        notifications.push(notification);
        // content.value = "";
        iconMenu.value = "mdi-menu-down";
    }

    function formatDate (data: Date): string {
        return new Date(data).toLocaleDateString("pt-BT")
    }

    // function serviceProvided (): void {
    //     iconMenu.value = "mdi-phone-outline";
    //     label.value = "Atendimento realizado"
    // }

    // function emailSent (): void {
    //     iconMenu.value = "mdi-email-outline";
    //     label.value = "Email enviado"
    // }

    // function messageSent (): void {
    //     iconMenu.value = "mdi-message-processing-outline";
    //     label.value = "Mensagem enviada";
    // }

    // function scheduledMeeting (): void {
    //     iconMenu.value = "mdi-laptop-account";
    //     label.value = "Reunião agendada"
    // }

    // function notificationSent (): void {
    //     iconMenu.value = "mdi-file-document-outline";
    //     label.value = "Notificação enviada"
    // }
</script>

<template>
    <!-- Contato realizado -->
    <!-- Email enviado -->
    <!-- Mensagem enviada -->
    <!-- Reunião agendada -->
    <!-- Notificação enviada -->
    <v-card rounded="0">
    <!-- <v-card color="white" rounded="0"> -->
    <!-- <v-card class="overflow-y-auto" height="450" rounded="0"> -->
    <!-- <v-card color="white" height="450" rounded="0"> -->
        <v-timeline class="mt-2" align="start" density="comfortable" line-inset="8" side="end" truncate-line="both">
        <!-- <v-timeline class="pa-4" align="start" density="comfortable" line-inset="5" side="end" truncate-line="both"> -->
            <v-timeline-item v-for="(notification, i) in notifications" dot-color="surface-variant" :key="i" size="x-small">
            <!-- <v-timeline-item v-for="notification in notifications" dot-color="surface-variant" width="700" size="x-small"> -->
                <v-card>
                    <v-card-item>
                        <v-card-title class="d-flex justify-space-between">
                            <span>{{ notification.label }}</span>
                            <span>{{ formatDate(notification.createdAt) }}</span>
                        </v-card-title>
                    </v-card-item>
                    <v-card-text>{{ notification.content }}</v-card-text>
                </v-card>
                <!-- <v-list-item>
                    <v-list-item-title>{{ notification.content }}</v-list-item-title>
                    <v-list-item-subtitle>{{ notification.content }}</v-list-item-subtitle>
                </v-list-item> -->
                <!-- <div class="d-flex justify-space-between flex-grow-1">
                    <div>{{ notification.label }}</div>
                    <div>{{ formatDate(notification.createdAt) }}</div>
                    <div class="text-subtitle-1">{{ notification.label }}</div>
                    <div class="text-subtitle-2">{{ formatDate(notification.createdAt) }}</div>
                </div>
                <p class="flex-shrink-0">{{ notification.content }}</p> -->
                <!-- <div class="d-flex align-center">
                    <v-avatar class="me-2" size="x-small">
                        <v-img v-if="notification.userName === 'Tim Clarkson'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1-aac046b6.png"></v-img>
                        <v-img v-if="notification.userName === 'Kane Frost'" src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-2-0ae005f8.png"></v-img>
                    </v-avatar>
                    <span>{{ notification.userName }}</span>
                </div> -->
            </v-timeline-item>
            <v-timeline-item dot-color="surface-variant" density="compact" size="x-small" width="500">
                <v-text-field v-model="content" v-on:keydown.enter="addNotification(content)" hide-details placeholder="Mensagem" variant="solo-filled">
                    <template v-slot:append-inner>
                        <v-btn id="menu" icon size="small" variant="text">
                            <v-icon :icon="iconMenu ? iconMenu : 'mdi-menu-down'"></v-icon>
                        </v-btn>
                        <v-tooltip activator="parent" open-delay="500">
                            <span>Tipo de Ação</span>
                        </v-tooltip>
                    </template>
                    <v-menu activator="#menu">
                        <v-list>
                            <v-list-item v-on:click="iconMenu = 'mdi-phone-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-phone-outline" size="small"></v-icon>
                                </template>
                                <span>Contato</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-whatsapp'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-whatsapp" size="small"></v-icon>
                                </template>
                                <span>Whatsapp</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-message-processing-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-message-processing-outline" size="small"></v-icon>
                                </template>
                                <span>Mensagem</span>
                            </v-list-item>
                            <v-list-item v-on:click="iconMenu = 'mdi-email-outline'" link>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-email-outline" size="small"></v-icon>
                                </template>
                                <span>Email</span>
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