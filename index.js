const Equal = require('./src/Equal');
const Include = require('./src/Include');
const AssertionList = require('./src/AssertionList');

const equalAssertion = new Equal(1, 1);
const includeAssertion = new Include([1, 2, 3], 3);
const assertionList = new AssertionList([equalAssertion, includeAssertion]);

const allAssertionsPass = assertionList.checkAll();
console.log("All assertions pass:", allAssertionsPass);

module.exports = { Equal, Include, AssertionList };
