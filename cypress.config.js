const { defineConfig } = require("cypress");
const { GoogleSocialLogin } = require("cypress-social-logins").plugins;


module.exports = defineConfig({
  projectId: "bnhthz",
  reporter: "cypress-mochawesome-reporter",
  defaultCommandTimeout: 30000,
  chromeWebSecurity: false,
  viewportWidth: 1000,
  viewportHeight: 600,
  pageLoadTimeout: 100000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://www.theguardian.com/uk",
  },
  env: {
    EMAIL: "tuffourboateng2@gmail.com",
    PASSWORD: "Rancho@1995dat",
    CLIENTID:
      "625125735714-rdotopj3pjm69ghjck4e9377j9v4speu.apps.googleusercontent.com",
    CLIENTSECRET: "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",
    LOGINURL: "https://accounts.google.com/signin/oauth/identifier",
    COOKIENAME: ""
    // GOOGLEEMAIL: "tuffourboateng2@gmail.com",
    // GOOGLEPASSWORD:"Rancho@1995dat"
  },
});
