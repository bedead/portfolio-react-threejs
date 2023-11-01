import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePluginGhPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio-react-threejs",
  plugins: [react(), VitePluginGhPages()],
});
