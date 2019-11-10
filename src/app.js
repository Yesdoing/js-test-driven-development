const TestCaseTest = require('./TestCaseTest.js');
const WasRun = require('./WasRun.js');
const TestSuite = require('./TestSuite.js');
const TestResult = require('./TestResult.js');

const suite = new TestSuite();
suite.add(new TestCaseTest('testTemplateMethod'))
suite.add(new TestCaseTest('testResult'))
suite.add(new TestCaseTest('testFiledResult'))
suite.add(new TestCaseTest('testFailedResultFormatting'))
suite.add(new TestCaseTest('testSuite'));
let result = new TestResult();
result = suite.run(result);

console.log(result.summary());