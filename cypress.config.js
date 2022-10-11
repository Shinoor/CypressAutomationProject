const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
      
    },
   // specPattern: 'cypress/integration/UIExecution/*.js',
    specPattern: 'cypress/integration/UIExecution/BDD/*.feature',
   
  },
});
