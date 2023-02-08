import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx, defineManifest } from '@crxjs/vite-plugin'

const manifest = defineManifest({
  manifest_version: 3,
  name: 'some name',
  version: '1.0.0',
  content_scripts: [{
    js: ['./src/content.tsx'],
    matches: ['<all_urls>']
  }],
  action: {
    default_popup: 'index.html'
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
