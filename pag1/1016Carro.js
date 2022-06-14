var input = require("fs").readFileSync("stdin", "utf8");

var distanceText = input.split("\n")
var distance = parseInt(distanceText);
var minutes = distance * 2;

console.log(minutes + " minutos");