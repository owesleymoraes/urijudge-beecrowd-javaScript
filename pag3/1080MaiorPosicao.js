var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var larger = 1;
var numberPosition = 0;

for (var indexNumber = 1; indexNumber <= 10; indexNumber++) {

    var inputNumberText = lines.shift().split('\n');
    var inputNumber = parseInt(inputNumberText[0]);
   
    if (inputNumber >= larger) {

        larger = inputNumber;
        numberPosition = indexNumber;

    }

}

console.log(larger);
console.log(numberPosition);
