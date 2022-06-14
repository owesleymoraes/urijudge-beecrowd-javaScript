var input = require('fs').readFileSync('stdin', 'utf8');

var salary = parseFloat(input.split("\n"));


if (salary > 0 && salary <= 2000.00) {

    console.log("Isento");
    return;
}

if (salary > 2000.01 && salary <= 3000.00) {
    var incomeTax = (salary - 2000) * 0.08;
    console.log(`R$ ${incomeTax.toFixed(2)}`);
    return;
}

if (salary > 3000.01 && salary <= 4500.00) {
    var incomeTax = (1000 * 0.08) + ((salary - 3000) * 0.18);
    console.log(`R$ ${incomeTax.toFixed(2)}`);
    return;
}

if (salary > 4500.00) {
    var incomeTax = (1000 * 0.08) + (1500 * 0.18) + ((salary - 4500) * 0.28);
    console.log(`R$ ${incomeTax.toFixed(2)}`);
    return;
}