// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/WikiSheep/', // <- muy importante para GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        categoria: resolve(__dirname, 'categoria.html'),
        lectura: resolve(__dirname, 'lectura.html')
      }
    }
  }
})
