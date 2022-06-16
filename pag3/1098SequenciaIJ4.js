var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let countIndexOne = 0.0;
let countIndexTwo = 1.0;

while (countIndexOne <= 2) {


    for (let indexAux = 1; indexAux <= 3; indexAux++) {

        if (countIndexOne === 0.0 || countIndexOne === 1.0 || countIndexOne === 2.0) {
            console.log("I=" + (countIndexOne).toFixed(0) + " J=" + (countIndexTwo).toFixed(0));

        } else {

            console.log("I=" + (countIndexOne).toFixed(1) + " J=" + (countIndexTwo).toFixed(1));
        }

        countIndexTwo += 1;

    }

    countIndexTwo -= 3;
    countIndexOne = parseFloat((countIndexOne + 0.2).toFixed(1));
    countIndexTwo += 0.2;

}
