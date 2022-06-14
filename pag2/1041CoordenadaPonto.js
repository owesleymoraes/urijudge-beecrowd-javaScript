var input = require('fs').readFileSync('stdin', 'utf8');

var [coordinateTextX, coordinateTextY] = input.split(" ");

var x = parseFloat(coordinateTextX);
var y = parseFloat(coordinateTextY);

if (x > 0 && y > 0) {
    console.log(`Q1`);
    return;
}

if (x < 0 && y > 0) {
    console.log(`Q2`);
    return;
}

if (x < 0 && y < 0) {
    console.log(`Q3`);
    return;
}

if (x > 0 && y < 0) {
    console.log(`Q4`);
    return;
}

if (x === 0 && y === 0) {
    console.log(`Origem`);
    return;
}

if (x > 0 || x < 0 && y === 0 ) {
    console.log(`Eixo X`);
    return;
}

if (x === 0 && y > 0 || y < 0) {
    console.log(`Eixo Y`);
    return;
}

