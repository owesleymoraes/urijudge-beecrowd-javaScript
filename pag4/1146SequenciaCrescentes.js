var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let numberInput;
let sequence = []

function printSequence(value) {
    if (value !== 0) {
        for (let i = 0; i < value; i++) {
            sequence[i] = i + 1
        }

        console.log(...sequence)
        sequence = []
    }

}

while (numberInput !== 0 && numberInput !== null) {
    numberInput = parseInt(lines.shift())
    printSequence(numberInput)

}

