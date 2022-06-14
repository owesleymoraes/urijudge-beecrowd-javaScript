 let input = require("fs").readFileSync("stdin","utf8");

 var radiusText = input.split("\n");

 var radius = parseFloat(radiusText);
 var area = ((4.0/3.0) * 3.14159 * (Math.pow(radius,3))).toFixed(3);

 console.log("VOLUME = " + area);

