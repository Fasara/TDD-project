const assert = require('assert');

class Dollar {
    constructor(amount) {
        this.amount = amount;
    }
    times(multiplier) {
        return new Dollar(this.amount * multiplier);
    }
}

let fiver = new Dollar(5); // We create an object representing a 5 dollar bill
let tenner = fiver.times(2); // We multiply it by 2
assert.strictEqual(tenner.amount, 10); // we expect the result to be 10

