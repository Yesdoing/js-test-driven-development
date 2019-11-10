const assert = require('assert');
const TestCase = require('./TestCase.js');
const WasRun = require('./WasRun.js');
const TestResult = require('./TestResult.js');
const TestSuite = require('./TestSuite.js');

class TestCaseTest extends TestCase {
  constructor(name) {
    super(name);
  }

  setUp() {
    this.result = new TestResult();
  }

  testTemplateMethod() {
    const test = new WasRun("testMethod")
    test.run(this.result);
    assert("setUp testMethod tearDown " === test.log)
  }

  testResult() {
    const test = new WasRun("testMethod");
    test.run(this.result)
    assert("1 run, 0 failed" === this.result.summary())
  }

  testFiledResult() {
    const test = new WasRun("testBrokenMethod");
    test.run(this.result)
    assert("1 run, 1 failed" === this.result.summary());
  }

  testFailedResultFormatting() {
    this.result.testStarted();
    this.result.testFailed();
    assert("1 run, 1 failed" === this.result.summary());
  }

  testThrowErrorSetUp() {
    const test = new WasRun("testThrowErrorSetup");
    const result = test.run();
    assert("0 run, 1 failed" === this.result.summary());
  }


  testSuite() {
    const suite = new TestSuite();
    suite.add(new WasRun("testMethod"));
    suite.add(new WasRun("testBrokenMethod"));
    suite.run(this.result);
    assert("2 run, 1 failed" === this.result.summary());
  }
}

module.exports = TestCaseTest;