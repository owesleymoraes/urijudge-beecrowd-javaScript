var input = require('fs').readFileSync('stdin', 'utf8');

var [AText, BText, CText] = input.split(" ");

var A = parseInt(AText);
var B = parseInt(BText);
var C = parseInt(CText);

var maiorAB = ((A + B) + (Math.abs(A - B))) / 2;

if (maiorAB == A) {

    if (A - C < 0) {

        console.log(C + " eh o maior");
    } else {
        console.log(A + " eh o maior");
    }
} else {

    if (B - C < 0) {

        console.log(C + " eh o maior");
    } else {
        console.log(B + " eh o maior");
    }

}