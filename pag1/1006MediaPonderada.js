var input = require("fs").readFileSync("stdin", "utf8");

var [noteTextOne, noteTextTwo, noteTextThree] = input.split("\n");

var noteOne = parseFloat(noteTextOne);
var noteTwo = parseFloat(noteTextTwo);
var noteThree = parseFloat(noteTextThree);

var media = (((noteOne * 2) + (noteTwo * 3) + (noteThree * 5)) / 10.00).toFixed(1);

console.log("MEDIA = " + media);


