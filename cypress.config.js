const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "video": true,
  e2e: {
    env: {
      useBaseUrl: 'https://usdemo.vee24.com/#/'
    },
    retries: 1,
    setupNodeEvents(on, config) {
      
    },
    experimentalRunAllSpecs: true,
    viewportHeight: 900,
    viewportWidth: 1600,
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output.xml',
    toConsole: true,
  },
});