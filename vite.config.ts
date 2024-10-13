import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    vue(),
    federation({
      name: 'remote_app',
      exposes: {
        "./App": "./src/App.vue",
        "./router": "./src/router/index.ts"
      },
      shared: ['vue', 'vue-router']
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: resolve(__dirname, 'src/main.ts')
    },
    target: 'esnext',
  }
})
