var input = require('fs').readFileSync('stdin', 'utf8')

let [numberTextOne, numberTextTwo] = input.split('\n')

let numberOne = parseInt(numberTextOne)
let numberTwo = parseInt(numberTextTwo)

function calculator(numOne, numTwo) {
    let count = 0

    if (numTwo > numOne) {
        for (i = numOne + 1; i < numTwo; i++) {

            if (i % 5 === 2 || i % 5 === 3) {
                count = i;
                 console.log(i)
            }

        }
    } else {
        for (i = numTwo + 1; i < numOne; i++) {

            if (i % 5 === 2 || i % 5 === 3) {
                count = i;
                console.log(i)
            }
        }


    }

}

calculator(numberOne, numberTwo)