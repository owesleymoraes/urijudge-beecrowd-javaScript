var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var cont = 0;
for (var i = 0; i <= 6; i++) {

    var number = parseFloat(lines.shift())

    if (number > 0) {
        cont++;
    }
}

console.log(`${cont} valores positivos`);
