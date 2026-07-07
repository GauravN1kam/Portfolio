import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Repo is served at https://GauravN1kam.github.io/Portfolio/
  base: '/Portfolio/',
  plugins: [react()],
})
