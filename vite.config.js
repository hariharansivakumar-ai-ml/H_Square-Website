import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // Ensures all assets are loaded from root path (prevents sub-page asset resolution errors)
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false, // Disables source maps for faster production builds and smaller upload sizes
    cssCodeSplit: true, // Splits CSS into relevant chunks to optimize load speed
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap')) {
              return 'gsap';
            }
            if (id.includes('swiper')) {
              return 'swiper';
            }
            if (id.includes('lucide-react')) {
              return 'lucide';
            }
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            return 'vendor';
          }
        }
      }
    }
  }
})
