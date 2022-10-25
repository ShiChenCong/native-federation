import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@gioboa/vite-module-federation'
import { createEsBuildAdapter } from '@softarc/native-federation-esbuild'

export default defineConfig(({ command }) => ({
  server: {
    open: true,
    fs: {
      allow: ['.', '../shared'],
    },
  },
  plugins: [
    federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: 'dist',
        tsConfig: 'tsconfig.json',
        federationConfig: './federation.config.cjs',
        verbose: false,
        dev: true
      },
      adapter: createEsBuildAdapter({ plugins: [] })
    }),
    react()
  ]
}))
