var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var indexI = 1;

for (var indexJ = 60; indexJ >= 0; indexJ -= 5) {

    console.log(`I=${indexI} J=${indexJ}`);
    indexI += 3;

}

