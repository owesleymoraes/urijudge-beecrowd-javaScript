var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");


let numberOne;
let numberTwo;

let amountSetence = parseInt(lines.shift().split("\n"));

for (let index = 1; index <= amountSetence; index++) {

    let amountSum = 0;
    
    numbers = lines.shift().split(" ");
    numberOne = parseInt(numbers[0]);
    numberTwo = parseInt(numbers[1]);
   

    if (numberOne - numberTwo < 0) {

        for (let i = numberOne; i < numberTwo; i++) {

            if (i % 2 != 0 && i != numberOne) {
                amountSum += i;

            }
        }

    } else {

        for (let i = numberTwo; i < numberOne; i++) {
            if (i % 2 != 0 && i != numberTwo) {
                amountSum += i;

            }

        }

    }

    console.log(amountSum);


}