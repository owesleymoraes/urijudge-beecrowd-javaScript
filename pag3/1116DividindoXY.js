var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var inputNumber = parseInt(lines.shift());

for (var i = 1; i <= inputNumber; i++) {

    var numbers = lines.shift().split(' ');
    var numberOne = parseFloat(numbers[0]);
    var numberTwo = parseFloat(numbers[1]);

    var division;

    if (numberOne !== 0 && numberTwo === 0) {
        console.log("divisao impossivel");

    } else if (numberOne === 0 && numberTwo !== 0) {

        if (numberTwo < 0) {
            numberTwo = numberTwo * -1;
        }

        division = (numberOne / numberTwo);
        console.log(division.toFixed(1));

    } else if (numberOne === 0 && numberTwo === 0) {

        console.log("0.0");
    }

    else {

        division = (numberOne / numberTwo);
        console.log(division.toFixed(1));
    }



}

