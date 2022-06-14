var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var lineOne = lines.shift().split(" ");
var lineTwo = lines.shift().split(" ");

var abscisionPontOne = parseFloat(lineOne[0]);
var orderedPontOne = parseFloat(lineOne[1]);

var abscisionPontTwo = parseFloat(lineTwo[0]);
var orderedPontTwo = parseFloat(lineTwo[1]);

var p1 = (abscisionPontTwo - abscisionPontOne);
var p2 = (orderedPontTwo - orderedPontOne);

var distance = Math.sqrt((Math.pow(p1, 2)) + (Math.pow(p2, 2))).toFixed(4);

console.log(distance);




