const assert = require('assert');

let fiver = new Dollar(5); // We create an object representing a 5 dollar bill
let tenner = fiver.times(2); // We multiply it by 2
assert.strictEqual(tenner.amount, 10); // we expect the result to be 10

