const TestResult = require('./TestResult.js');

class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {
  }
  
  run(result) {
    result.testStarted();

    this.setUp();
    try {
      this[this.name]();
    } catch(e) {
      result.testFailed();
    }
    this.tearDown();
  }

  tearDown() {

  }
}

module.exports = TestCase;