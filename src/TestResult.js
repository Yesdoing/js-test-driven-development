
class TestResult {

  constructor() {
    this.runCount = 0;
    this.failureCount = 0;
  }

  testStarted() {
    this.runCount += 1;
  }

  testFailed() {
    this.failureCount += 1;
  }

  summary() {
    return `${this.runCount} run, ${this.failureCount} failed`
  }
}

module.exports = TestResult;