import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    mkcert(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
  },
})
