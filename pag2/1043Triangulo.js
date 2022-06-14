var input = require('fs').readFileSync('stdin', utf8);

var [sideTextA, sideTextB, sideTextC] = input.split(" ");

var sideA = parseFloat(sideTextA);
var sideB = parseFloat(sideTextB);
var sideC = parseFloat(sideTextC);

var validsideA = (Math.abs(sideB - sideC) < sideA) && sideA < (sideB + sideC);
var validsideB = (Math.abs(sideA - sideC) < sideB) && (sideB < (sideA + sideC));
var validsideC = (Math.abs(sideA - sideB) < sideC) && (sideC < (sideA + sideB));

if (validsideA && validsideB && validsideC) {

    var perimeterTriangle = (sideA + sideB + sideC).toFixed(1);
    console.log("Perimetro = " + perimeterTriangle);

} else {

    var areaTrapeze = (((sideA + sideB) * sideC) / 2.0).toFixed(1);

    console.log("Area = " + areaTrapeze);

}