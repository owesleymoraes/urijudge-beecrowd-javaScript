var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var count = 0;
var amount = 0;
var avarege;

for (var i = 0; i <= 5; i++) {
    var number = parseFloat(lines.shift());

    if (number > 0) {    
        amount += number;
        count++;        
    }


}

avarege = (amount / count).toFixed(1);

console.log(`${count} valores positivos\n${avarege}`);