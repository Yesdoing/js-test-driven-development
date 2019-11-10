const assert = require('assert');
const TestCase = require('./TestCase.js');
const WasRun = require('./WasRun.js');


class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
  }

  setUp() {
    this.test = new WasRun("testMethod");
  }

  testTemplateMethod() {
    const test = new WasRun("testMethod")
    test.run()
    assert("setUp testMethod tearDown " === test.log)
  }

  testResult() {
    const test = new WasRun("testMethod");
    const result = test.run()
    assert("1 run, 0 failed" === result.summary())
  }

  testFiledResult() {
    const test = new WasRun("testBrokenMethod");
    const result = test.run();
    assert("1 run, 1 failed" === result.summary());
  }
}

module.exports = TestCaseTest;