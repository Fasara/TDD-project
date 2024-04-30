const assert = require('assert');
class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }
}

let fiver = new Money(5, 'USD'); // We create a new Money object with 5 USD
let tenner = fiver.times(2); // We multiply it by 2
assert.strictEqual(tenner.amount, 10); // we expect the result to be 10
assert.strictEqual(tenner.currency, 'USD'); // we expect the currency to be USD

