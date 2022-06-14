var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var partOne = lines.shift().split(" ");
var partTwo = lines.shift().split(" ");

//Part One
var idPartOne = parseInt(partOne[0]);
var amountPartOne = parseInt(partOne[1]);
var custPartOne = parseFloat(partOne[2]);

//Part Two
var idPartTwo = parseInt(partTwo[0]);
var amountPartTwo = parseInt(partTwo[1]);
var custPartTwo = parseFloat(partTwo[2]);

var total = ((amountPartOne * custPartOne) + (amountPartTwo * custPartTwo)).toFixed(2);

console.log("VALOR A PAGAR: R$ " + total);