const { stdout } = require('process');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let amountSum = 0;

let arrayIndex = [];
let count = 0;
let numberText;


while (numberText = lines.shift().split(" ")) {

    let numberOne = parseInt(numberText[0]);
    let numberTwo = parseInt(numberText[1]);


    if (numberOne <= 0 || numberTwo <= 0) {
        break;
    }


    if (numberOne - numberTwo < 0) {

        for (let i = numberOne; i <= numberTwo; i++) {

            arrayIndex[count] = i;
            amountSum += i;
            count++;
        }

    } else {

        for (let i = numberTwo; i <= numberOne; i++) {


            arrayIndex[count] = i;
            amountSum += i;
            count++;
        }

    }

    arrayIndex.forEach((index) => {
        stdout.write((`${index} `));
    })
    console.log(`Sum=${amountSum}`);
    amountSum = 0;
    arrayIndex = [];

} 
