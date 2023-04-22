var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let ages = [];
let count = 0;
let age = Number(lines.shift().split("\n"));

function average(sumAge, amountAge) {
  return (sumAge / amountAge).toFixed(2);
}

while (age > 0) {
  ages.push(age);
  age = Number(lines.shift().split("\n"));
  count++;
}

let sum = ages.reduce((accumulator, sum) => {
  return accumulator + sum;
});

console.log(average(sum, count));
