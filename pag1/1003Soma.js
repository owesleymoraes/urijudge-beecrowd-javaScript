var input = require('fs').readFileSync('stdin', 'utf8');

var [numberTextOne, numberTextTwo] = input.split("\n");

var numberOne = parseInt(numberTextOne);
var numberTwo = parseInt(numberTextTwo);


var sum = numberOne + numberTwo;

console.log("SOMA = " + sum);

