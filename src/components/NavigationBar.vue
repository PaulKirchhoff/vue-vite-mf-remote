<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Vite Vue3 App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/home" variant="outlined">Info View</v-btn>
      <v-btn to="/remote" variant="outlined">Remote View</v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Keine spezielle Logik in App.vue
</script>

<style>
@import '@mdi/font/css/materialdesignicons.min.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
</style>
