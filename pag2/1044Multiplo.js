var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var lineOne = lines.shift().split(" ");
var numberOne = parseInt(lineOne[0]);
var numberTwo = parseInt(lineOne[1]);

if (numberOne > numberTwo) {
    console.log(numberOne % numberTwo === 0 ? "Sao Multiplos" : "Nao sao Multiplos");
} else {
    console.log(numberTwo % numberOne === 0 ? "Sao Multiplos" : "Nao sao Multiplos");
}
