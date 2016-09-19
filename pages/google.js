const webdriver = require('selenium-webdriver');
const by = webdriver.By;
const until = webdriver.until;

module.exports = function(driver) {

  const utils = require('../utils')(driver);
  return {
    navigate: function() {
      return driver.navigate().to("http://www.google.com");
    },
    searchFor: function(query) {
      utils.waitForElementByName('q');
      // driver.wait(until.elementLocated(by.name('q')));
      driver.findElement(by.name('q')).sendKeys(query + '\n');
      return driver.wait(until.elementLocated(by.id('rso')));
    },
    firstEntry: function() {
      return driver.findElement(by.css('h3.r a')).getText();
    }
  };
};
