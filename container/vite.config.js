import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "container",
      remotes: {
        auth: "http://localhost:8081/assets/remoteEntry.js",
        catalogo: "http://localhost:8082/assets/remoteEntry.js",
        ventas: "http://localhost:8083/assets/remoteEntry.js",
        menu: "http://localhost:8084/assets/remoteEntry.js",
      },
      
    })
  
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
})
