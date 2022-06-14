var input = require('fs').readFileSync("stdin", "utf8");

var daysText = input.split("\n");
var days = parseInt(daysText);

var year = parseInt(days / 365);
var month = Math.round(parseInt((((days / 365) - year) * 365) / 30));
var day = Math.round((((((days / 365) - year) * 365) / 30) - month) * 30);

console.log(year + " ano(s)");
console.log(month + " mes(es)");
console.log(day + " dia(s)");