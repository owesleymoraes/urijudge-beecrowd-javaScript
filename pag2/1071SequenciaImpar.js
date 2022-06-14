var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var numberOne = parseInt(lines.shift());
var numberTwo = parseInt(lines);
var result = 0;

if (numberOne > numberTwo) {
    for (var i = numberTwo + 1; i < numberOne; i++) {
        if (i % 2 != 0) {
            result += i;
        }
    }
} else {
    for (var i = numberOne + 1; i < numberTwo; i++) {
        if (i % 2 != 0) {
            result += i;
        }
    }
}

console.log(result);

