import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Relative asset paths support both domain roots and repository subpaths.
  base: './',
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', css: false },
})
