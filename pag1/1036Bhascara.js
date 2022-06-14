var input = require("fs").readFileSync("stdin", "utf8");

var [coefficietsA, coefficietsB, coefficietsC] = input.split(" ");

var A = parseFloat(coefficietsA);
var B = parseFloat(coefficietsB);
var C = parseFloat(coefficietsC);

if (A === 0) {
    console.log("Impossivel calcular")
    return;
}

var delta = (Math.pow(B, 2)) - (4 * A * C);

if (delta <= 0) {
    console.log("Impossivel calcular")
} else {

    var r1 = ((- B + (Math.sqrt(delta))) / (2 * A)).toFixed(5);
    var r2 = ((- B - (Math.sqrt(delta))) / (2 * A)).toFixed(5);

    console.log(`R1 = ${r1}\nR2 = ${r2}`);
}