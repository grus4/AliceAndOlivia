const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./tests/**/*.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: " https://dev.aliceandolivia.com/on/demandware.store/Sites-aando-Site",
      show: true,
      windowSize: "1920x1080",
    },
  },
  include: {
    I: "./steps_file.js",

    productLandingPage: "./pages/productLandingPage.js",

    homePage: "./pages/homePage",

    productDetailsPage: "./pages/productDetailsPage",

    shoppingBagPage: "./pages/shoppingBagPage.js",

    yourInformationPage: "./pages/yourInformationPage.js",

    shippingPage: "./pages/shippingPage.js",

    paymentPage: "./pages/paymentPage.js",

    confirmationPage: "./pages/confirmationPage.js",

    shippingAddressGuestUser: "./userData/userData.js",

    searchResultsPage: "./pages/searchResultsPage.js",

    headerFragment: "./fragments/header.js",

    loginPage: "./pages/loginPage.js",

    myAccountPage: "./pages/myAccountPage.js",

    addressBookPage: "./pages/addressBookPage.js",

    myAccountPaymentsPage: "./pages/myAccountPaymentsPage.js",
  },

  name: "AliceAndOlivia",

  plugins: {
    pauseOnFail: {},

    retryFailedStep: {
      enabled: true,
    },

    autoDelay: {
      enabled: true,
    },
  },

  mocha: {
    reporterOptions: {
      reportDir: "output",
    },
  },
};