var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var amountSetence = parseInt(lines.shift().split("\n"));
var setence;

for (var i = 1; i <= amountSetence; i++) {
    
    setence = parseInt(lines.shift().split("\n"));

    if (setence === 0) {
        console.log("NULL");

    }

    if (setence % 2 === 0 && setence != 0) {
        if (setence > 0) {
            console.log("EVEN POSITIVE");

        } else {
            console.log("EVEN NEGATIVE");

        }
    } else {
        if (setence > 0) {
            console.log("ODD POSITIVE");

        } if (setence < 0) {
            console.log("ODD NEGATIVE");

        }

    }

}