var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var number = parseInt(lines.shift());

for (var i = 0; i <= number; i++) {

    if (!(i % 2 === 0)) {

        console.log(`${i}`);
    }
}