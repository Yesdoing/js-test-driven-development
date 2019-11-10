const TestResult = require('./TestResult.js');

class TestSuite {
  constructor() {
    this.tests = [];
  }

  add(test) {
    this.tests.push(test);
  }

  run(result) {
    for(const test of this.tests) {
      test.run(result);
    }
    return result;
  }
}

module.exports = TestSuite;