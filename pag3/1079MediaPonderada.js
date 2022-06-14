var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var amountSetence = parseInt(lines.shift().split("\n"));
var average ;

for (var i = 1; i <= amountSetence; i++) {

    var notes = lines.shift().split(" ", 3);
    var noteOne = parseFloat(notes[0]);
    var noteTwo = parseFloat(notes[1]);
    var noteThree = parseFloat(notes[2]);

    average = (((noteOne * 2) + (noteTwo * 3) + (noteThree * 5))/10.00).toFixed(1);
    console.log(`${average}`);


}
