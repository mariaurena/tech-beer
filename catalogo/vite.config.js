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
        "./CatalogoApp": "./src/bootstrap"
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

 
