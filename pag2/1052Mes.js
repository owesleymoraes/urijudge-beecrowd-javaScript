var input = require('fs').readFileSync('stdin', 'utf8');

var monthNumber = parseInt(input.split("\n"));

var month = new Map();

month.set(1, "January");
month.set(2, "February");
month.set(3, "March");
month.set(4, "April");
month.set(5, "May");
month.set(6, "June");
month.set(7, "July");
month.set(8, "August");
month.set(9, "September");
month.set(10, "October");
month.set(11, "November");
month.set(12, "December");

console.log(month.get(monthNumber));