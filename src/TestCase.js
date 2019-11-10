const TestResult = require('./TestResult.js');

class TestCase {
  constructor(name) {
    this.name = name;
  }

  setUp() {
  }
  
  run() {
    const result = new TestResult();
    result.testStarted();
    this.setUp();
    this[this.name]();
    this.tearDown();

    return result;
  }

  tearDown() {

  }
}

module.exports = TestCase;