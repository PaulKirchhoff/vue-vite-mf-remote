<template>
  <v-app style="border: 1px solid red">
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
</script>

<style>
@import '@mdi/font/css/materialdesignicons.min.css';
@import 'material-design-icons-iconfont/dist/material-design-icons.css';
</style>
