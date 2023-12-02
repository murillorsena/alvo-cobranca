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
</script>

<template>
    <v-card rounded="0">
    <!-- <v-card class="overflow-y-visible" rounded="0"> -->
    <!-- <v-card style="background-color: white;"> -->
        <!-- <v-timeline class="bg-surface" align="start" density="compact" line-inset="8" side="end" truncate-line="both"> -->
        <v-timeline class="my-4 mx-4" align="start" density="compact" line-inset="8" side="end" truncate-line="both">
        <!-- <v-timeline class="bg-surface my-4 mx-4" align="start" density="comfortable" line-inset="8" side="end" truncate-line="both"> -->
            <v-timeline-item v-for="(notification, i) in notifications" dot-color="surface-variant" :key="i" size="x-small">
                <div class="d-flex justify-space-between align-center flex-wrap">
                    <h4 class="me-1 mb-2">{{ notification.label }}</h4>
                    <!-- <h4 class="app-timeline-title mb-2 me-1">8 Invoices have been paid</h4> -->
                    <small class="text-no-wrap">Wednesday</small>
                </div>
                <p class="mb-2">{{ notification.content }}</p>
                <!-- <p class="app-timeline-text mb-0">Invoices have been paid to the company.</p> -->
                <div class="d-flex align-center mt-3">
                    <v-avatar class="me-2" size="x-small">
                        <v-img src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-2-0ae005f8.png"/>
                    </v-avatar>
                    <div>
                        <p class="font-weight-medium mb-0">{{ notification.userName }}</p>
                    </div>
                </div>
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

<style scoped>
    .app-timeline-title {
        color: rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));
        font-size: 16px;
        font-weight: 500;
        line-height: 1.3125rem;
        /* font-family: 'Inter',sans-serif,-apple-system,blinkmacsystemfont,Segoe UI,roboto,Helvetica Neue,arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol; */
    }
    .app-timeline-meta {
        color: rgba(var(--v-theme-on-surface),var(--v-disabled-opacity));
        font-size: 12px;
        line-height: .875rem;
        /* font-family: 'Inter',sans-serif,-apple-system,blinkmacsystemfont,Segoe UI,roboto,Helvetica Neue,arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol; */
    }
    .app-timeline-text {
        color: rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));
        font-size: 14px;
        line-height: 1.25rem;
        /* font-family: 'Inter'; */
        /* font-family: inter,sans-serif,-apple-system,blinkmacsystemfont,Segoe UI,roboto,Helvetica Neue,arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol; */
    }

    .family {
        font-family: inter;
        /* font-family: sans-serif; */
        /* font-family: -apple-system; */
        /* font-family: blinkmacsystemfont; */
        /* font-family: Segoe UI; */
        /* font-family: roboto; */
        /* font-family: Helvetica Neue; */
        /* font-family: arial; */
        /* font-family: sans-serif; */
        /* font-family: "Apples Color Emoji"; */
        /* font-family: "Segoe UI Emoji"; */
        /* font-family: Segoe UI Symbol; */
    }
</style>