const WasRun = require('./WasRun.js');

const test = new WasRun("testMethod")
console.log(test.wasRun)
test.run()
console.log(test.wasRun)