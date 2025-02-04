import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'exhdra',
  trashAssetsBeforeRuns: true,

  retries: {
    runMode:7,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
  },

  chromeWebSecurity: false,
})
