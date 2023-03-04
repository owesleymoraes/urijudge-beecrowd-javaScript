var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let firstNumberSequence = parseInt(lines.shift());
let limitSequence = parseInt(lines.shift());
let amountNumber = [];
amountNumber[0] = firstNumberSequence;

while (limitSequence <= 0) {
  limitSequence = Number(lines.shift());
}

if (firstNumberSequence && limitSequence >= 0) {
  for (i = 1; i <= limitSequence - 1; i++) {
    
    amountNumber[i] = firstNumberSequence + 1;
    firstNumberSequence++;
  }

  const sum = amountNumber.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });

  console.log(sum);
}
