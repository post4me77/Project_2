var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var fs = require('fs');


function writeScreenshot(data, name) {
  name = name || 'ss.png';
  fs.writeFile(name, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
    if(err) throw err;
  });
}

test.describe('Vapid Space', function() {

  this.timeout(15000);

  test.it('should show home page', function() {

    var driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();

    driver.get('http://www.vapidspace.com').then(function() {

      driver.takeScreenshot().then(function(data) {
        writeScreenshot(data, 'out1.png');
      });

    });
    driver.quit();
  });
});