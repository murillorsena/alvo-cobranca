<script setup lang="ts">
import { useAuthStore } from '../stores/AuthStore.js';
const authStore = useAuthStore();
const name = authStore.session.name;
</script>

<template>
  <v-toolbar height="50" color="blue">
    <v-spacer></v-spacer>
    <div>
      Olá, {{ name }}
      <v-avatar color="white" size="small" image="../../public/img-user.jpg">
      </v-avatar>
    </div>
    <!-- <div class="d-flex justify-start">
      <v-avatar color="white" size="small">
      </v-avatar>
    </div> -->
  </v-toolbar>
</template>

<style>
</style>
