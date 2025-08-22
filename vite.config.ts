import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // Base corretto per GitHub Pages (sostituiva placeholder /nome-repo/)
  base: process.env.NODE_ENV === 'production' ? '/idraulico-di-lorenzo/' : '/',
  plugins: [vue()],
})

