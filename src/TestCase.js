
class TestCase {

  constructor(name) {
    this.name = name;
  }

  setUp() {
  }
  
  run() {
    this.setUp();
    this[this.name]();
    this.tearDown();
  }

  tearDown() {
    
  }
}

module.exports = TestCase;