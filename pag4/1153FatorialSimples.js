var input = require('fs').readFileSync('stdin', 'utf8')


let fatorial = Number(input)
let sequenceFatorial = fatorial

for (let i = fatorial - 1; i >= 1; i--) {
    sequenceFatorial = sequenceFatorial * i
}

console.log(sequenceFatorial);
