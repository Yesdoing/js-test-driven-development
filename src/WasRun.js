
class WasRun {
  constructor(name) {
    this.wasRun = null;
    this.name = name;
  }

  testMethod() {
    this.wasRun = 1;
  }

  run() {
    this[this.name]();
  }
}

module.exports = WasRun;