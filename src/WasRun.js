const TestCase = require('./TestCase.js');

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
  }

  testMethod() {
    this.wasRun = 1;
  }
}

module.exports = WasRun;