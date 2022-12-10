var input = require('fs').readFileSync('stdin', 'utf8')


let [amountLinesText, amountNumberText] = input.split(' ')
let amountLines = Number(amountLinesText)
let amountNumber = Number(amountNumberText)
let setence = []
let amount = 1

while (amount < amountNumber) {
    for (let i = 0; i < amountLines; i++) {
        setence[i] = amount
        amount++

    }
    console.log(...setence)


}

