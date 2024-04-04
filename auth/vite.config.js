import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import pkg from './package.json'

const { dependencies } = pkg

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthApp": "./src/bootstrap"
      },
      shared: {
        'react': {
          singleton: true,
          requiredVersion: dependencies['react']
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom']
        },
      },
      remotes: {
        core: "http://localhost:8085/assets/remoteEntry.js"
      }
    })
  
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})

 
