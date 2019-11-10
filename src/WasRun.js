const TestCase = require('./TestCase.js');

class WasRun extends TestCase {
  constructor(name) {
    super(name);
    this.wasRun = null;
  }

  setUp() {
    this.log = "setUp "
  }

  testMethod() {
    this.log = this.log + "testMethod "
  }

  testBrokenMethod() {
    throw Error("error");
  }

  tearDown() {
    this.log = this.log + "tearDown "
  }
}

module.exports = WasRun;