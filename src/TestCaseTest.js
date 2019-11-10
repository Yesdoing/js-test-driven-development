const assert = require('assert');
const TestCase = require('./TestCase.js');
const WasRun = require('./WasRun.js');


class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
  }

  testRunning() {
    const test = new WasRun("testMethod");
    assert(!test.wasRun)
    test.run()
    assert(test.wasRun)
  }
}

module.exports = TestCaseTest;