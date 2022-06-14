var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var number;
var count = 0;

for (let i = 1; i <= 5; i++) {

    number = parseInt(lines.shift());

    if (number % 2 === 0) {
        count++;
    }
}

console.log(`${count} valores pares`);