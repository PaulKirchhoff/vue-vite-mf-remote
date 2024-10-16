// src/main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { vuetify } from './plugins/vuetify'
import router from './router'
import 'vuetify/styles'

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
