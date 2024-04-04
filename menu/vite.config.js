import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import pkg from './package.json'

const { dependencies } = pkg

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "catalogo",
      filename: "remoteEntry.js",
      exposes: {
        "./MenuApp": "./src/bootstrap"
      },
      shared: {
        'react': {
          requiredVersion: dependencies['react']
        },
        'react-dom': {
          requiredVersion: dependencies['react-dom']
        },
        'react-router-dom': {
          requiredVersion: dependencies['react-router-dom']
        }
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

 
