var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var number = parseInt(lines.shift().split("\n"));
var pow;

for (var i = 1; i <= number; i++) {

    if (i % 2 === 0) {
        pow = Math.pow(i, 2);
        console.log(`${i}^2 = ${pow}`);

    }

}