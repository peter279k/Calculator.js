function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.add = function(num1 = this.num1, num2 = this.num2) {
        if(isNaN(num1)) {
            throw new TypeError(num1 + ' is not the valid number');
        }

        if(isNaN(num2)) {
            throw new TypeError(num2 + ' is not the valid number');
        }

        return parseFloat(num1) + parseFloat(num2);
    };

    this.minus = function(num1 = this.num1, num2 = this.num2) {
        if(isNaN(num1)) {
            throw new TypeError(num1 + ' is not the valid number');
        }

        if(isNaN(num2)) {
            throw new TypeError(num2 + ' is not the valid number');
        }

        return parseFloat(num1) - parseFloat(num2);
    }

    this.mul = function(num1 = this.num1, num2 = this.num2) {
        if(isNaN(num1)) {
            throw new TypeError(num1 + ' is not the valid number');
        }

        if(isNaN(num2)) {
            throw new TypeError(num2 + ' is not the valid number');
        }

        return parseFloat(num1) * parseFloat(num2);
    }

    this.divide = function(num1 = this.num1, num2 = this.num2) {
        if(isNaN(num1)) {
            throw new TypeError(num1 + ' is not the valid number');
        }

        if(isNaN(num2)) {
            throw new TypeError(num2 + ' is not the valid number');
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if(num2 == 0) {
            throw new Error(num2 + ' should not be the zero number');
        }
        return num1 / num2;
    }
}

module.exports = Calculator;
