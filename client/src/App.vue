<script setup lang="ts">
</script>

<template>
  <div>
    <ul>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'detail' }">Detail</router-link>
      </li>
    </ul>
    <router-vue></router-vue>
  </div>
</template>

<style scoped>
</style>
