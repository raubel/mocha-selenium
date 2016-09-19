const webdriver = require('selenium-webdriver');
const by = webdriver.By;
const until = webdriver.until;

module.exports = function(driver) {
  return {
    waitForElementByName: function(name) {
      return driver.wait(until.elementLocated(by.name(name)));
    }
  };
};
