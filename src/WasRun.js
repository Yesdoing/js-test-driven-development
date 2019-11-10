const TestCase = require('./TestCase.js');

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
  }

  setUp() {
    this.wasRun = null;
    this.wasSetUp = 1;
  }

  testMethod() {
    this.wasRun = 1;
  }
}

module.exports = WasRun;