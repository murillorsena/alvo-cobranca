<script setup lang="ts">
    defineProps(["register"]);
</script>

<template>
    <v-list rounded>
        <v-list-item>
            <template v-slot:prepend>
                <v-avatar variant="tonal" rounded>
                    <v-icon icon="mdi-clipboard-text-outline" size="small"></v-icon>
                </v-avatar>
            </template>
            <v-list-item-title>{{ register.storeCode }}</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">Código</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <template v-slot:prepend>
                <v-avatar variant="tonal" rounded>
                    <v-icon icon="mdi-home-city-outline" size="small"></v-icon>
                </v-avatar>
            </template>
            <v-list-item-title>{{ register.storeName }}</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">Loja</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <template v-slot:prepend>
                <v-avatar variant="tonal" rounded>
                    <v-icon icon="mdi-office-building-outline" size="small"></v-icon>
                </v-avatar>
            </template>
            <v-list-item-title>{{ register.shoppingDescription }}</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">Shopping</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <template v-slot:prepend>
                <v-avatar variant="tonal" rounded>
                    <v-icon icon="mdi-phone-outline" size="small"></v-icon>
                </v-avatar>
            </template>
            <v-list-item-title>(51) 98765-4321</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">Contato</v-list-item-subtitle>
        </v-list-item>
        <v-list-item>
            <template v-slot:prepend>
                <v-avatar variant="tonal" rounded>
                    <v-icon icon="mdi-email-outline" size="small"></v-icon>
                </v-avatar>
            </template>
            <v-list-item-title>{{ register.storeEmail }}</v-list-item-title>
            <v-list-item-subtitle class="text-subtitle-2">Email</v-list-item-subtitle>
        </v-list-item>
    </v-list>
</template>