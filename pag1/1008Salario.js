let input = require("fs").readFileSync("stdin", "utf8");

var [registrationText, hourWorkedText, hourCustText] = input.split("\n");

var registration = parseInt(registrationText);
var hourWorked = parseInt(hourWorkedText);
var hourCust = parseFloat(hourCustText);

var wage = (hourCust * hourWorked).toFixed(2);

console.log("NUMBER = " + registration);
console.log("SALARY = U$ " + wage);

