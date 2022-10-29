var input = require('fs').readFileSync('stdin', 'utf8')


let number = parseInt(input.split('\n'))
let sentence = []
let aux = 0;
let count = 0


for (i = 1; i <= number; i++) {

    for (j = 0; j < 3; j++) {
        sentence[count] = aux + 1;
        count++
        aux++

    }

    console.log(`${sentence[0]} ${sentence[1]} ${sentence[2]} PUM`)
    sentence[0] = 0;
    sentence[1] = 0;
    sentence[2] = 0;
    count = 0
    aux += 1

}