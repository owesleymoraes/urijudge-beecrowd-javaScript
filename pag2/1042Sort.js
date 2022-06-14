var input = require('fs').readFileSync('stdin', 'utf8');

var [numberTextOne, numberTextTwo, numberTextThree] = input.split(" ");

var numbers = [Number(numberTextOne), Number(numberTextTwo), Number(numberTextThree)]

numbers.sort((a, b) => a - b)
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log("");
console.log(Number(numberTextOne));
console.log(Number(numberTextTwo));
console.log(Number(numberTextThree));

