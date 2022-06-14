var input = require("fs").readFileSync("stdin", "utf8");

var [numbertextOne, numbertexttwo, numbertextThree, numbertextFour] = input.split("\n");

var numberOne = parseInt(numbertextOne);
var numberTwo = parseInt(numbertexttwo);
var numberThree = parseInt(numbertextThree);
var numberFour = parseInt(numbertextFour);

var diferenca = (numberOne * numberTwo) - (numberThree * numberFour);

console.log("DIFERENCA = " + diferenca);


