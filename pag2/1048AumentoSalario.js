var input = require('fs').readFileSync('stdin', 'utf8');

var salary = parseFloat(input);

var newSalary;
var readjust;
var percent;

if (salary >= 0 && salary <= 400.00) {

    newSalary = salary * 1.15;
    readjust = salary * 0.15;
    percent = "15";

}

if (salary >= 400.01 && salary <= 800.00) {

    newSalary = salary * 1.12;
    readjust = salary * 0.12;
    percent = "12";

}

if (salary >= 800.01 && salary <= 1200.00) {

    newSalary = salary * 1.10;
    readjust = salary * 0.10;
    percent = "10";

}

if (salary >= 1200.01 && salary <= 2000.00) {

    newSalary = salary * 1.07;
    readjust = salary * 0.07;
    percent = "7";
}

if (salary > 2000) {

    newSalary = salary * 1.04;
    readjust = salary * 0.04;
    percent = "4";

}

console.log(`Novo salario: ${newSalary.toFixed(2)}`);
console.log(`Reajuste ganho: ${readjust.toFixed(2)}`);
console.log(`Em percentual: ${percent} %`);