import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  ssgOptions: {
    dirStyle: 'flat',
    formatting: 'minify',
    includedRoutes() {
      return ['/', '/pricing', '/features', '/whatsapp', '/privacy', '/terms', '/data-deletion', '/404']
    },
  },
})
