var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n")

var sides = lines.shift().split(" ")

var sideA = parseFloat(sides[0]);
var sideB = parseFloat(sides[1]);
var sideC = parseFloat(sides[2]);

var triagle = ((sideA * sideC) / 2.00).toFixed(3);
var circle = (3.14159 * Math.pow(sideC, 2)).toFixed(3);
var trapezio = (((sideA + sideB) * sideC) / 2.00).toFixed(3);
var square = (Math.pow(sideB, 2)).toFixed(3);
var rectangle = (sideA * sideB).toFixed(3)

console.log("TRIANGULO: " + triagle);
console.log("CIRCULO: " + circle);
console.log("TRAPEZIO: " + trapezio);
console.log("QUADRADO: " + square);
console.log("RETANGULO: " + rectangle);





