

var input = require('fs').readFileSync('stdin', 'utf8');

var raio = parseFloat(input);

var area = (3.14159 * Math.pow(raio, 2)).toFixed(4);

console.log("A=" + area);