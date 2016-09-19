const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('chrome').build();
const expect = require('chai').expect;

const google = require('./pages/google')(driver);

before(() => google.navigate());

it("shoud work", function*() {
  google.searchFor("Example Domain");
  return expect(yield google.firstEntry()).to.equal('Example Domain');
});

// after(() => driver.quit());
