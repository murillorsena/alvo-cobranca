<script setup lang="ts">
    defineProps(["representatives"]);
</script>

<template>
    <v-virtual-scroll height="400" :items="representatives">
        <template v-slot:default="{ item }: any">
            <v-list-item>
                <v-card variant="tonal">
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
        <!-- <v-list-item v-for="representative in representatives">
            <v-card variant="tonal">
                <v-card-item>
                    <v-card-title>
                        <div>{{ representative.name }}</div>
                    </v-card-title>
                </v-card-item>
            </v-card>
        </v-list-item> -->
    </v-virtual-scroll>
</template>

<!-- <template>
    <v-list class="bg-white" v-if="representatives" max-height="20%">
        <v-list-item v-for="representative in representatives">
            <v-card>
            <v-card variant="tonal">
                <v-card-item>
                    <v-card-title>
                        <div>{{ representative.name }}</div>
                    </v-card-title>
                    <v-card-subtitle>
                        <v-list density="compact">
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-avatar rounded variant="tonal">
                                        <v-icon icon="mdi-account-key-outline" size="small"></v-icon>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>{{ representative.role }}</v-list-item-title>
                                <v-list-item-subtitle>Função</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-avatar rounded variant="tonal">
                                        <v-icon icon="mdi-email-outline" size="small"></v-icon>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>{{ representative.email }}</v-list-item-title>
                                <v-list-item-subtitle>Email</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-avatar rounded variant="tonal">
                                        <v-icon icon="mdi-phone-outline" size="small"></v-icon>
                                    </v-avatar>
                                </template>
                                <v-list-item-title>{{ representative.phone }}</v-list-item-title>
                                <v-list-item-subtitle>Contato</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-card-subtitle>
                </v-card-item>
            </v-card>
        </v-list-item>
    </v-list>
    <div v-else>
        <span>Sem representantes</span>
    </div>
</template> -->