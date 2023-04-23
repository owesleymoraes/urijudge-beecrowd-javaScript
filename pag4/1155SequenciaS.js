var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let denominator = [];
let sequenceQuotient = [];

function calculationOfSumOfFractions(limitSequenceDenominator) {
  for (i = 0; i < limitSequenceDenominator; i++) {
    denominator[i] = i + 1;
  }

  sequenceQuotient = denominator.map((item) => {
    return 1 / item;
  });

  let sumFraction = sequenceQuotient.reduce((accumulator, amount) => {
    return accumulator + amount;
  });

  return sumFraction.toFixed(2);
}

console.log(calculationOfSumOfFractions(100));
