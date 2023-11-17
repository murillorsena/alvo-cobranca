<script setup lang="ts">
    import { defineProps } from "vue";

    defineProps(["representatives"]);
</script>

<template>
    <v-list v-if="representatives">
        <v-list-item v-for="representative in representatives">
            <v-card style="background-color: grey;">
                <v-card-item>
                    <v-card-title>
                        <div>{{ representative.name }}</div>
                    </v-card-title>
                    <v-card-subtitle>
                        <v-list density="compact">
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-email" size="small"></v-icon>
                                </template>
                                <span>{{ representative.email }}</span>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-phone" size="small"></v-icon>
                                </template>
                                <span>{{ representative.phone }}</span>
                            </v-list-item>
                            <v-list-item>
                                <template v-slot:prepend>
                                    <v-icon class="mr-3" icon="mdi-account-key" size="small"></v-icon>
                                </template>
                                <span>{{ representative.role }}</span>
                            </v-list-item>
                        </v-list>
                    </v-card-subtitle>
                </v-card-item>
            </v-card>
        </v-list-item>
    </v-list>
    <div v-else>Sem representantes</div>
</template>