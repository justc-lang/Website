import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
      minify: 'terser',
      terserOptions: {
          sourceMap: false,
          compress: true,
          mangle: {
              eval: false
          },
          format: {
              comments: false,
              ascii_only: true,
              wrap_func_args: false,
              inline_script: true
          }
      },
      cssMinify: false
  }
})
