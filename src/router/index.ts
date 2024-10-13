// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import InfoView from "../views/InfoView.vue";
import RemoteView from "../views/RemoteView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: '/home', component: HomeView },
  { path: '/remote-info', component: InfoView },
  { path: '/remote', component: RemoteView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
