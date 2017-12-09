var assert = require('assert');
var calculatorjs = require('../src/main');
var Calculator = calculatorjs.Calculator;
var SimpleMath = calculatorjs.SimpleMath;
var calculator = new Calculator(1, 2);
var simpleMath = new SimpleMath(2, 3);

describe('Calculator', function() {
    describe('add()', function() {
        it('should return 3', function() {
            assert.equal(3, calculator.add());
    });
  });
});

describe('Calculator', function() {
    describe('minus()', function() {
        it('should return -1', function() {
            assert.equal(-1, calculator.minus());
    });
  });
});
