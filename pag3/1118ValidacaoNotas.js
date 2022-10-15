var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


var listNotes = [];
var amountNotes = 0;
var continueProgram = 1;


function calculator(noteOne, noteTwo) {

    var avarge = (((noteOne + noteTwo) / 2)).toFixed(2);
    console.log(`media = ${avarge}`);
}

function menu() {
    console.log("novo calculo (1-sim 2-nao)");
    continueProgram = parseInt(lines.shift().split('\n'));
}

while (continueProgram !== 2) {

    let note = parseFloat(lines.shift().split('\n'));

    if (note >= 0 && note <= 10) {

        listNotes.push(note);
        amountNotes++;

        if (amountNotes === 2) {

            calculator(listNotes[0], listNotes[1]);
            menu();
            
            if (continueProgram != 1) {

                while (continueProgram < 1 || continueProgram > 2) {
                    menu();
                }
            }

        }

    } else {
        console.log("nota invalida");
    }

}
