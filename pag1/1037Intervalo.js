var input = require('fs').readFileSync('stdin', 'utf8');

var numberText = input.split("\n");

var numberInterval = parseFloat(numberText);

if (numberInterval >= 0 && numberInterval <= 25.0000) {
    console.log("Intervalo [0,25]");

} else if (numberInterval >= 25.00001 && numberInterval <= 50.0000000) {
    console.log("Intervalo (25,50]");

} else if (numberInterval >= 50.00001 && numberInterval <= 75.0000000) {
    console.log("Intervalo (50,75]");

} else if (numberInterval > 75.00001 && numberInterval <= 100.0000000) {
    console.log("Intervalo (75,100]");

} else {
    console.log("Fora de intervalo");
}