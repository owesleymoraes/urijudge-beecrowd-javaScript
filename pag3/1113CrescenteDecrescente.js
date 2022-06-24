const { stdout } = require('process');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

while ((numberText = lines.shift().split(' '))) {


    let numberOne = parseInt(numberText[0]);
    let numberTwo = parseInt(numberText[1]);

    if (numberOne === numberTwo) {
        break;

    }

    let valida = numberOne < numberTwo ? "Crescente" : "Decrescente";
    console.log(valida);

}