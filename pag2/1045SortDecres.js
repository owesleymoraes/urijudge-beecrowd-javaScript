var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

lineOne = lines.shift().split(" ", 3);

var sidesTriangle = [Number(lineOne[0]), Number(lineOne[1]),Number(lineOne[2])];

sidesTriangle.sort((a, b) => b - a);

var A = sidesTriangle[0];
var B = sidesTriangle[1];
var C = sidesTriangle[2];

if (A >= (B + C)) {

    console.log("NAO FORMA TRIANGULO");
    return;
}

if ((Math.pow(A, 2)) == ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {

    console.log("TRIANGULO RETANGULO");

}

if ((Math.pow(A, 2)) > ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {

    console.log("TRIANGULO OBTUSANGULO");

}

if ((Math.pow(A, 2)) < ((Math.pow(B, 2)) + (Math.pow(C, 2)))) {

    console.log("TRIANGULO ACUTANGULO");

}

if (A == B && B == C) {

    console.log("TRIANGULO EQUILATERO");
    return;
}

if (A == B || B == C || A == C) {

    console.log("TRIANGULO ISOSCELES");

}