var input = require("fs").readFileSync("stdin", "utf8");

var [numberTextA, numberTextB, numberTextC, numberTextD] = input.split(" ");

var A = parseInt(numberTextA);
var B = parseInt(numberTextB);
var C = parseInt(numberTextC);
var D = parseInt(numberTextD);

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 === 0) {

    console.log("Valores aceitos");

} else {
    console.log("Valores nao aceitos");
}
