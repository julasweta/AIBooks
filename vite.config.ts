import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',          // якщо сайт на root-домені Vercel
  build: {
    outDir: 'dist',   // директорія збірки Vite (Vercel її використовує)
  },
})

