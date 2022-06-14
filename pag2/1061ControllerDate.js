var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var lineOneStart = lines.shift().split(" ");
var lineTwoStart = lines.shift().split(" : ");

var lineOneFinal = lines.shift().split(" ");
var lineTwoFinal = lines.shift().split(" : ");

var dayStart = parseInt(lineOneStart[1]);
var hourStart = parseInt(lineTwoStart[0]);
var minutesStart = parseInt(lineTwoStart[1]);
var secundStart = parseInt(lineTwoStart[2]);

var dayFinal = parseInt(lineOneFinal[1]);
var hourFinal = parseInt(lineTwoFinal[0]);
var minutesFinal = parseInt(lineTwoFinal[1]);
var secundFinal = parseInt(lineTwoFinal[2]);

var dateStart = new Date(0, 0, dayStart, hourStart, minutesStart, secundStart);
var dateFinal = new Date(0, 0, dayFinal, hourFinal, minutesFinal, secundFinal);

var timeHour = parseInt(((dateFinal.getTime() - dateStart.getTime())));

var day = parseInt(((timeHour / 3600000)) / 24);
var hour = parseInt((timeHour / 3600000) - (day * 24));
var minutes = parseInt((((timeHour / 1000)) / 60) - (day * 24 * 60) - (hour * 60));
var secund = parseInt((timeHour / 1000) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minutes * 60));

console.log(day +` dia(s)`);
console.log(hour +` hora(s)`);
console.log(minutes +` minuto(s)`);
console.log(secund + ` segundo(s)`);