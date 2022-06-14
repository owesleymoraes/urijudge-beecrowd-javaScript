 var input = require('fs').readFileSync('stdin','utf8'); 

 var [ distanceText, fuelText] = input.split("\n");

 var distance = parseInt(distanceText);
 var fuel = parseFloat(fuelText).toFixed(1);

 var consumption = (distance/fuel).toFixed(3);

 console.log(consumption + " km/l");