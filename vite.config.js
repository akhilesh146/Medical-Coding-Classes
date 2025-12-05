import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure base path is set correctly for static hosting
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

