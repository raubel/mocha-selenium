#!/usr/bin/env bash
set -pe

# Prerequisite
# NodeJS V6
# npm i selenium-webdriver mocha mochawesome co-mocha chai
# npm i chromedriver
# npm i geckodriver
# npm i phantomjs

# Use "Xvfd :10 ac & export DISPLAY=:10" for a headless browser

node_modules/mocha/bin/mocha \
  --timeout 20000 \
  --reporter mochawesome \
  --require co-mocha \
  test.js 
