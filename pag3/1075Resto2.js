var input = require('fs').readFileSync('stdin', 'utf8');

var quotient = parseInt(input);

for (var i = 1; i <= 10000; i++) {

    if (i % quotient === 2) {
        console.log(`${i}`);
    }

}
