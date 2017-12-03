function SimpleMath(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.pow = function(num1 = this.num1, num2 = this.num2) {
        if(isNaN(num1)) {
            throw new TypeError(num1 + ' is not the valid number');
        }

        if(isNaN(num2)) {
            throw new TypeError(num2 + ' is not the valid number');
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        return Math.pow(num1, num2);
    }

    this.sqrt = function(num = this.num) {
        if(isNaN(num)) {
            throw new TypeError(num + ' is not the valid number');
        }

        num = parseFloat(num);

        return Math.sqrt(num);
    }

    this.log = function(num = this.num1) {
        if(isNaN(num)) {
            throw new TypeError(num + ' is not the valid number');
        }

        num = parseFloat(num);

        return Math.log(num);
    }

    this.logTen = function(num = this.num1) {
        if(isNaN(num)) {
            throw new TypeError(num + ' is not the valid number');
        }

        num = parseFloat(num);

        return Math.log10(num);
    }
}

module.exports = SimpleMath;
