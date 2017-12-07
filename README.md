# Calculator.js

[![Build Status](https://travis-ci.org/peter279k/Calculator.js.svg?branch=master)](https://travis-ci.org/peter279k/Calculator.js)
[![Coverage Status](https://coveralls.io/repos/github/peter279k/Calculator.js/badge.svg?branch=master)](https://coveralls.io/github/peter279k/Calculator.js?branch=master)
[![CodeCov](https://codecov.io/gh/peter279k/Calculator.js/branch/master/graph/badge.svg)](https://codecov.io/gh/peter279k/Calculator.js)

The dead simple Calculator.js is for the workshop

# Usage

## Install the package
```bash
npm install simplecalculatorjs
```
## Simple package usage

```bash
const SimpleCalculatorJs = require('simplecalculatorjs');
var Calculator = SimpleCalculatorJs.Calculator;
var SimpleMath = SimpleCalculatorJs.SimpleMath;
var calculator = new Calculator(1, 2);
var simpleMath = new SimpleMath(2, 3);

console.log(calculator.add());
console.log(calculator.minus());
console.log(calculator.divide());
console.log(calculator.mul());

console.log(simpleMath.pow());
console.log(simpleMath.sqrt());
console.log(simpleMath.log());
console.log(simpleMath.logTen());

```

# Testing

- clone the repo
```bash
git clone https://github.com/peter279k/calculator.js
```

- install the dev dependencies
```bash
npm install
```
- run testing
```bash
npm test
```

# Slide sections

[slide](http)

- Introduction Testing
- Assertions
- Node.js Unit Testing
- Code coverage
- istanbul
- CI service integration
- Code coverage service integration
