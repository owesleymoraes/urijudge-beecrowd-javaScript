var input = require("fs").readFileSync("stdin", "utf8");

var [numberTextOne, numberTextTwo] = input.split("\n");

var numberOne = parseFloat(numberTextOne);
var numberTwo = parseFloat(numberTextTwo);

var media = (((numberOne * 3.5) + (numberTextTwo * 7.5)) / 11.00).toFixed(5);

console.log("MEDIA = " + media);
