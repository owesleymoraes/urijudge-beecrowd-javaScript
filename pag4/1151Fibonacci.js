var input = require('fs').readFileSync('stdin', 'utf8')

var numberInto = Number(input)
var sequenceFibonacci = [0, 1]
var count = 2;
var valueAfter = 1;
var valueBefore = 0;


for (var i = 1; i <= numberInto - 2; i++) {

    sequenceFibonacci[count] = valueBefore + valueAfter
    valueBefore = sequenceFibonacci[count]
    valueAfter = sequenceFibonacci[count - 1]
    count++
}

console.log(...sequenceFibonacci);