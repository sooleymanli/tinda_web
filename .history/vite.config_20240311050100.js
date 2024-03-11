import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/tinda_web",
  server: {
    port: 3000,
  },
  preview: {
    port: 8000,
  },
})
