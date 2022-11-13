var input = require('fs').readFileSync('stdin', 'utf8')


let numberLines = parseInt(input)
let sentence = []
let count = 1


for (let i = 1; i <= numberLines; i++) {
    for (let j = 0; j < 3; j++) {
        sentence[j] = count

    }
    let base = sentence[0]
    let squared = Math.pow(sentence[1], 2)
    let cube = Math.pow(sentence[2], 3)
    count++

    console.log(`${base} ${squared} ${cube}`)

}


