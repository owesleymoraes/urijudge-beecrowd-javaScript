var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var number;
var countEven = 0;
var countOdd = 0;
var countPositive = 0;
var countNegative = 0;

for (let i = 1; i <= 5; i++) {

    number = parseInt(lines.shift());

    if (number % 2 === 0) {
        countEven++;

        if (number > 0) { countPositive++ }
        if (number < 0) { countNegative++ }

    } else {
        countOdd++;

        if (number > 0) { countPositive++; } 
        else { countNegative++; }
    }
}

console.log(`${countEven} valor(es) par(es)`);
console.log(`${countOdd} valor(es) impar(es)`);
console.log(`${countPositive} valor(es) positivo(s)`);
console.log(`${countNegative} valor(es) negativo(s)`);