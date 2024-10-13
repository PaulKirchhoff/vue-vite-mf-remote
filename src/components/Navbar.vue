<script setup lang="ts">

</script>

<template>
  <v-app-bar app>
    <v-toolbar-title>Vite Vue3 App<br></v-toolbar-title>
    <v-toolbar-items>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn variant="outlined">Home View</v-btn>
      </router-link>
      {{ '||' }}
      <router-link to="/remote-info">
        <v-btn variant="outlined">Remote Info View</v-btn>
      </router-link>
      {{ '||' }}
      <router-link to="/remote">
        <v-btn variant="outlined">Remote View</v-btn>
      </router-link>
    </v-toolbar-items>
  </v-app-bar>
</template>

<style scoped>

</style>
