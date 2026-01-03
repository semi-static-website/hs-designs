import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Serve static assets directly from the parent folder during dev/preview
  publicDir: '../',
  // Use BASE env for GitHub Pages project sites; default to '/'
  base: process.env.BASE || '/',
  server: {
    fs: {
      strict: false,
      allow: ['..']
    }
  }
})
