const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'reporters/custom-reporter.js',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout:8000
});
