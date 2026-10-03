import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const reloadOnPublicChange = {
  name: 'reload-on-public-change',
  configureServer(server: { watcher: { on: (event: string, cb: (event: string, file: string) => void) => void } ; ws: { send: (msg: { type: string }) => void } }) {
    server.watcher.on('all', (event, file) => {
      if (!file) return
      const normalized = file.replace(/\\/g, '/')
      if (normalized.includes('/public/')) {
        server.ws.send({ type: 'full-reload' })
      }
    })
  },
}

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    open: true,
  },
  plugins: [react(), reloadOnPublicChange],
  build: {
    rollupOptions: {
      output: {
        manualChunks: { motion: ['motion/react'], react: ['react', 'react-dom'] },
      },
    },
  },
})
