var input = require("fs").readFileSync("stdin", "utf8");

var [nameUserText, salaryText, amountSalesText] = input.split("\n");

var namerUser = nameUserText ;
var salary = parseFloat(salaryText);
var amauntSales = parseFloat(amountSalesText);

var wageFinal = (salary + (amauntSales * 0.15)).toFixed(2);


console.log("TOTAL = R$ " + wageFinal);