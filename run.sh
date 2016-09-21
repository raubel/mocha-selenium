#!/usr/bin/env bash
set -pe

# See the following link for good information about mocha, selenium and end-to-end tests
# http://marmelab.com/blog/2016/04/19/e2e-testing-with-node-and-es6.html

# Prerequisite
# NodeJS V6
# npm i selenium-webdriver mocha mochawesome co-mocha chai
# npm i chromedriver
# npm i geckodriver
# npm i phantomjs

# Use "Xvfb :10 ac & export DISPLAY=:10" for a headless browser

node_modules/mocha/bin/mocha \
  --timeout 20000 \
  --reporter mochawesome \
  --require co-mocha \
  test.js 
