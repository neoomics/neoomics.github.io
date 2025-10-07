import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-cname',
      writeBundle() {
        copyFileSync('public/CNAME', 'dist/CNAME')
      }
    }
  ],
  base: '/',
  server: {
    host: '0.0.0.0'
  }
})