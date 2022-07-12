var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

while (numberText = (lines.shift().split(" "))) {

    let coordenatesX = parseInt(numberText[0]);
    let coordenatesY = parseInt(numberText[1]);

    if (coordenatesX === 0 || coordenatesY === 0) {
        break;
    }

    if (coordenatesX > 0 && coordenatesY > 0) {
        console.log("primeiro");
    }

    if (coordenatesX > 0 && coordenatesY < 0) {
        console.log("quarto");
    }

    if (coordenatesX < 0 && coordenatesY > 0) {
        console.log("segundo");
    }

    if (coordenatesX < 0 && coordenatesY < 0) {
        console.log("terceiro");
    }



}

