var input = require('fs').readFileSync('stdin', 'utf8');

var nunberText = input.split("\n");
var notesBank = parseInt(nunberText)

var notesOneHundred = parseInt(notesBank / 100);
var restOnehundred = notesBank - (notesOneHundred * 100);

var notesFifteen = parseInt(restOnehundred / 50);
var restFifteen = restOnehundred - (notesFifteen * 50);

var notesTwenty = parseInt(restFifteen / 20);
var restTwenty = restFifteen - (notesTwenty * 20);

var notesTeen = parseInt(restTwenty / 10);
var restTeen = restTwenty - (notesTeen * 10);

var notesFive = parseInt(restTeen / 5);
var restFive = restTeen - (notesFive * 5);

var notesTwo = parseInt(restFive / 2);
var restTwo = restFive - (notesTwo * 2);

var notesOne = restTwo;

console.log(notesBank);
console.log(notesOneHundred + " nota(s) de R$ 100,00");
console.log(notesFifteen + " nota(s) de R$ 50,00");
console.log(notesTwenty + " nota(s) de R$ 20,00");
console.log(notesTeen + " nota(s) de R$ 10,00");
console.log(notesFive + " nota(s) de R$ 5,00");
console.log(notesTwo + " nota(s) de R$ 2,00");
console.log(notesOne + " nota(s) de R$ 1,00");



