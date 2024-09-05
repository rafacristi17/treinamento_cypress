const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1280,
    viewportHeight:720,
    watchForFileChanges:false,
    specPattern:'cypress/e2e/**/*.feature',
    baseUrl:'http://www.automationpractice.pl',
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor',cucumber());
    },
  },
});
