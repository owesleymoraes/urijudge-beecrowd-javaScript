var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')


let X = parseInt(lines.shift())
let Z = parseInt(lines.shift())
let count = 0


while (X >= Z) {
    Z = parseInt(lines.shift())

    if (Z > X) {
        let sum = 0
        for (let i = X; i <= Z; i++) {
            if (sum <= Z) {
                sum += + i
                count++

            }
        }
    }
}

console.log(count);