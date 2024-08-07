const assert = require('assert');
class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this.currency = currency;
    }
    times(multiplier) {
        return new Money(this.amount * multiplier, this.currency);
    }

    divide(divider) {
        return new Money(this.amount / divider, this.currency);
    }
}

let fiver = new Money(5, 'USD'); // We create a new Money object with 5 USD
let tenner = new Money(10, 'USD'); // We create a new Money object with 10 USD
assert.deepStrictEqual(fiver.times(2), tenner);


let originalMoney = new Money(4002, 'KRW');
let actualMoneyAfterDivision = originalMoney.divide(4);
let expectedMoneyAfterDivision = new Money(1000.5, 'KRW');
assert.deepStrictEqual(actualMoneyAfterDivision, expectedMoneyAfterDivision); // node.js assert module, it compares two objects for equality using '===' operator

