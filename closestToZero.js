'use strict';

const { isEmpty } = require('lodash');

function _returnClosestNumberToZero(num1, num2) {
    const absNum1 = Math.abs(num1);
    const absNum2 = Math.abs(num2);

    if (absNum1 < absNum2 || absNum1 === absNum2 && num1 > 0) {
        return num1
    }

    return num2;
}

module.exports = (numbersArray) => {
    let closestToZero = 0;

    if (!isEmpty(numbersArray)) {
        closestToZero = numbersArray.reduce(
            (acc, num) => _returnClosestNumberToZero(num, acc),
            numbersArray[0]
        );
    }

    return closestToZero;
}
