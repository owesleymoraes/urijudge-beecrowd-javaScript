var input = require('fs').readFileSync('stdin','utf8');
var lines = input.split('\n');

let listNotes  = [];
let amountNotes = 1;

listNotes.push();

while( amountNotes <=2 ) {
    
    var note = parseFloat(lines.shift().split('\n'));
    
    if (note >= 0 && note <= 10) {

        listNotes.push(note);
        amountNotes++;

    } else {

       console.log("nota invalida");
    }
   
}

var avarge = ((listNotes[0] + listNotes[1]) / 2).toFixed(2);
			console.log(`media = ${avarge}`);
