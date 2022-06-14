var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var number = parseInt(lines.shift());

if (number % 2 === 0) {
    number++;
}

for (var i = 1; i <= 6; i++) {
    if (!(number % 2 === 0)) {
        console.log(number);
        number++
    }
    number++;
}