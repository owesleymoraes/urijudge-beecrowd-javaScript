var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var line = lines.shift().split(" ");

var hourStart = Number(line[0]);
var hourEnd = Number(line[1]);

if (hourStart === hourEnd) {
    console.log("O JOGO DUROU 24 HORA(S)");
    return;
}

if (hourStart < hourEnd) {
    var timePlay = hourEnd - hourStart;
    console.log(`O JOGO DUROU ${timePlay} HORA(S)`);
}

if (hourStart > hourEnd) {
    var timePlay = (24 - hourStart) + hourEnd;
    console.log(`O JOGO DUROU ${timePlay} HORA(S)`);

}