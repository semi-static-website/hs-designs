import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a function config so we can vary settings by mode
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    plugins: [react()],
    // In dev, serve parent assets; in prod, disable publicDir to avoid recursive copy
    publicDir: isProd ? false : '../',
    // Use BASE env for GitHub Pages project sites; default to '/'
    base: process.env.BASE || '/',
    server: {
      fs: {
        strict: false,
        allow: ['..']
      }
    }
  }
})
