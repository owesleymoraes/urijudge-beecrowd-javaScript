var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines.shift().split('\n'));
var testNumber;
var countIn = 0;
var countOut = 0;

for (var i = 1; i <= number; i++) {

    testNumber = parseInt(lines.shift().split('\n'));


    if (testNumber >= 10 && testNumber <= 20) {

        countIn += 1;

    } else {
        countOut += 1;
    }

}

console.log(`${countIn} in`);
console.log(`${countOut} out`);