<script setup lang="ts">
    defineProps(["representatives"]);
</script>

<template>
    <v-virtual-scroll height="600" :items="representatives">
        <template v-slot:default="{ item }: any">
            <v-list-item>
                <v-card>
                    <v-card-item>
                        <v-card-title>
                            <div>{{ item.name }}</div>
                        </v-card-title>
                        <v-card-subtitle>
                            <v-list density="compact">
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-avatar rounded variant="tonal">
                                            <v-icon icon="mdi-account-key-outline" size="small"></v-icon>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title>{{ item.role }}</v-list-item-title>
                                    <v-list-item-subtitle>Função</v-list-item-subtitle>
                                </v-list-item>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-avatar rounded variant="tonal">
                                            <v-icon icon="mdi-email-outline" size="small"></v-icon>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title>{{ item.email }}</v-list-item-title>
                                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                                </v-list-item>
                                <v-list-item>
                                    <template v-slot:prepend>
                                        <v-avatar rounded variant="tonal">
                                            <v-icon icon="mdi-phone-outline" size="small"></v-icon>
                                        </v-avatar>
                                    </template>
                                    <v-list-item-title>{{ item.phone }}</v-list-item-title>
                                    <v-list-item-subtitle>Contato</v-list-item-subtitle>
                                </v-list-item>
                            </v-list>
                        </v-card-subtitle>
                    </v-card-item>
                </v-card>
            </v-list-item>
        </template>
    </v-virtual-scroll>
</template>