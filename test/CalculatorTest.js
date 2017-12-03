const assert = require('assert');

var calculatorjs = require('../src/main');
var Calculator = calculatorjs.Calculator;
var SimpleMath = calculatorjs.SimpleMath;
var calculator = new Calculator(1, 2);
var simpleMath = new SimpleMath(2, 3);

// assert.equal(expected, result);

assert.equal(3, calculator.add());
assert.equal(-1, calculator.minus());
assert.equal(2, calculator.mul());
assert.equal(0.5, calculator.divide());

assert.equal(8, simpleMath.pow());
assert.equal(2, simpleMath.sqrt(4));
assert.equal(0, simpleMath.log(1));
assert.equal(0, simpleMath.logTen(1));

// It's equivalent to assert.throws(function() {calculator.add('ff', 'ff');}, TypeError);

assert.throws(() => calculator.add('ff', 'ff'), TypeError);
assert.throws(() => calculator.minus('ff', 'ff'), TypeError);
assert.throws(() => calculator.mul('ff', 'ff'), TypeError);
assert.throws(() => calculator.divide('ff', 'ff'), TypeError);
assert.throws(() => calculator.divide(1, 0), Error);
