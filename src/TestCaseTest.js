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

  // testRunning() {
  //   this.test.run()
  //   assert(this.test.wasRun)
  // }

  testTemplateMethod() {
    const test = new WasRun("testMethod")
    test.run()
    assert("setUp testMethod tearDown " === test.log)
  }
}

module.exports = TestCaseTest;