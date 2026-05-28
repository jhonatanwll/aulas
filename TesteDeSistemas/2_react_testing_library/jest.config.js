// jsdom = navegador de mentira em memoria; setupTests liga os matchers do jest-dom.
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
};
