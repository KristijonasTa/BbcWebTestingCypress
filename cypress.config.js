const { defineConfig } = require("cypress");

require('dotenv').config(); 



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "https://www.bbc.com/",
    chromeWebSecurity: false,
    
    viewportHeight: 1080,
    viewportWidth: 1920
    // viewportWidth: 1280,
    // viewportHeight: 720
  },
});
