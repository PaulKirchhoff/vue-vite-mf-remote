<template>
  <v-app style="border: 1px solid red">
    <v-app-bar app>
      <v-toolbar-title>Vite Vue3 App<br></v-toolbar-title>
      <v-toolbar-items>

        <v-spacer></v-spacer>
        <!-- Verwende den `to`-Attribut korrekt innerhalb des `router-link` -->
        <router-link to="/">
          <v-btn variant="outlined">Home View</v-btn>
        </router-link>
        {{ '||' }}
        <router-link to="/remote-info">
          <v-btn variant="outlined">Info View</v-btn>
        </router-link>
        {{ '||' }}
        <router-link to="/remote">
          <v-btn variant="outlined">Remote View</v-btn>
        </router-link>
      </v-toolbar-items>

    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
// Keine spezielle Logik in App.vue notwendig
</script>

<style>
@import '@mdi/font/css/materialdesignicons.min.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
</style>
