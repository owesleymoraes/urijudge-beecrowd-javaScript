

var input = require('fs').readFileSync('stdin', 'utf8');

var [hourText, speedText] = input.split("\n");

var hour = parseInt(hourText);
var speed = parseInt(speedText);
var distance = speed * hour

var fuel = (distance / 12.00).toFixed(3);

console.log(fuel);