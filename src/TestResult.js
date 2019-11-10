
class TestResult {

  constructor() {
    this.runCount = 0;
  }

  testStarted() {
    this.runCount += 1;
  }

  summary() {
    return `${this.runCount} run, 0 failed`
  }
}

module.exports = TestResult;