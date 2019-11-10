
class TestCase {

  constructor(name) {
    this.name = name;
  }
  
  run() {
    this[this.name]();
  }
}

module.exports = TestCase;