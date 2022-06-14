var input = require('fs').readFileSync("stdin", "utf8");

var notesText = input.split("\n");
var notes = parseFloat(notesText);

var notesOneHundred = parseInt(notes / 100);
var restOneHundred = parseFloat(notes % 100);

var noteFifty = parseInt(restOneHundred / 50);
var restNoteFifty = parseFloat(restOneHundred % 50);

var noteTwenty = parseInt(restNoteFifty / 20);
var restNoteTwenty = parseFloat(restNoteFifty % 20);

var noteTeen = parseInt(restNoteTwenty / 10);
var restnoteTeen = parseFloat(restNoteTwenty % 10);

var noteFive = parseInt(restnoteTeen / 5);
var restNotefive = parseFloat(restnoteTeen % 5);

var noteTwo = parseInt(restNotefive / 2);
var restNoteTwo = parseFloat(restNotefive % 2);

var coinOneReal = parseInt(restNoteTwo);
var resCoinOneReal = parseFloat((restNoteTwo - coinOneReal) * 100).toFixed(0);

var coinfiftyCent = parseInt(resCoinOneReal / 50);
var restCoinfiftyCent = parseFloat(resCoinOneReal % 50);

var coinTwentyFiveCent = parseInt(restCoinfiftyCent / 25);
var restCoinTwelveFiveCent = parseFloat(restCoinfiftyCent % 25);

var coinTeenCent = parseInt(restCoinTwelveFiveCent / 10);
var restCoinTeenCent = parseFloat(restCoinTwelveFiveCent % 10);

var coinFiveCent = parseInt(restCoinTeenCent / 5);
var restCoinFiveCent = parseFloat(restCoinTeenCent % 5);

var coinOneCent = restCoinFiveCent;

console.log("NOTAS:");
console.log(notesOneHundred + " nota(s) de R$ 100.00");
console.log(noteFifty + " nota(s) de R$ 50.00");
console.log(noteTwenty + " nota(s) de R$ 20.00");
console.log(noteTeen + " nota(s) de R$ 10.00");
console.log(noteFive + " nota(s) de R$ 5.00");
console.log(noteTwo + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(coinOneReal + " moeda(s) de R$ 1.00");
console.log(coinfiftyCent + " moeda(s) de R$ 0.50")
console.log(coinTwentyFiveCent + " moeda(s) de R$ 0.25");
console.log(coinTeenCent + " moeda(s) de R$ 0.10");
console.log(coinFiveCent + " moeda(s) de R$ 0.05");
console.log(coinOneCent + " moeda(s) de R$ 0.01");



