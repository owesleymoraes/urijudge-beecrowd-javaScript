 var input = require('fs').readFileSync('stdin', 'utf8'); 

 var [numberFormatTextOne, numberFormatTextTwo]  = input.split("\n");

 var numberOne = parseInt(numberFormatTextOne);
 var numberTwo = parseInt(numberFormatTextTwo);

 var produto = numberOne * numberTwo;

 console.log("PROD = " + produto);