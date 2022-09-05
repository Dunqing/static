import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames(asset) {
          if (asset.name.includes('/src/assets/')) {
            const filename = asset.name.match(/\/assets\/(.*)/)?.[1]
            if (filename) {
              return filename
            }
          }
          return '[name].[hash].[ext]'
        }
      }
    }
  }
})
