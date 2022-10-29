var input = require('fs').readFileSync('stdin', 'utf8')
var lines = input.split('\n')

let controller = 0;
let countAlcohol = 0;
let countGasoline = 0;
let countDiesel = 0;


do {
    controller = parseInt(lines.shift().split('\n'))

    switch (controller) {
        case 1:
            countAlcohol += 1
            break;
        case 2:
            countGasoline += 1
            break;
        case 3:
            countDiesel += 1
            break;


    }
} while (controller !== 4)

console.log('MUITO OBRIGADO');
console.log(`Alcool: ${countAlcohol}`);
console.log(`Gasolina: ${countGasoline}`);
console.log(`Diesel: ${countDiesel}`);
