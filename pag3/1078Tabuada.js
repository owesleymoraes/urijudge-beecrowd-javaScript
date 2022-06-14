var input = require('fs').readFileSync('stdin', 'utf8');


var number = parseInt(input);
var index = 1;

for (var i = 1; i <= 10; i++) {
    console.log(`${index} x ${number} = ${index * number}`);
    index++;
}