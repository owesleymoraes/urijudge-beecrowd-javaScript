var input = require('fs').readFileSync('stdin', 'utf8')

let [numberTextOne, numberTextTwo] = input.split('\n')

let numberOne = parseInt(numberTextOne)
let numberTwo = parseInt(numberTextTwo)

function calculator(numOne, numTwo) {
    let countOne = 0
    let countTwo = 0

    if (numTwo > numOne) {
        for (i = numOne; i <= numTwo; i++) {
            if (!(i % 13 === 0)) countOne += i;
        }
    } else {
        for (i = numTwo; i <= numberTextOne; i++) {
            if (!(i % 13 === 0)) countTwo += i
        }
    }

    return countOne + countTwo
}

let result = calculator(numberOne, numberTwo);

console.log(result);