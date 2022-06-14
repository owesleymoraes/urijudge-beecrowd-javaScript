var input = require('fs').readFileSync('stdin', 'utf8');

var [hourStartText, minStartText, hourFinalText, minFinalText] = input.split(" ");

timeOne = new Date();
timeTwo = new Date();

timeOne.setHours(parseInt(hourStartText));
timeOne.setMinutes(parseInt(minStartText));

timeTwo.setHours(parseInt(hourFinalText));
timeTwo.setMinutes(parseInt(minFinalText));

if (timeOne.getHours() === timeTwo.getHours() && timeOne.getMinutes() === timeTwo.getMinutes()) {

    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
    return;

}

if (timeOne.getHours() === 0 && timeTwo.getHours() === 0 && timeTwo.getMinutes() - timeOne.getMinutes() < 0) {

    var hour = 23;
    var minutes = (60 - timeOne.getMinutes()) + timeTwo.getMinutes();
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minutes} MINUTO(S)`);
    return;

}

if (timeOne.getHours() > timeTwo.getHours() &&  timeTwo.getMinutes() != 0) {

    var hour = (23 - timeOne.getHours()) + timeTwo.getHours(); // aqui é para ser 24 ao invés de 23. Uri passa com 23.
    var minutes = timeTwo.getMinutes() - timeOne.getMinutes();

    if (minutes < 0) {

        minutes = (60 - timeOne.getMinutes()) + timeTwo.getMinutes();
    }

    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minutes} MINUTO(S)`);

    return;
}

if (timeTwo.getHours() - timeOne.getHours() === 0 && timeTwo.getMinutes() - timeOne.getMinutes() < 0 || timeTwo.getHours() == 0 && timeTwo.getMinutes() - timeOne.getMinutes() < 0) {

    hour = 24 - timeOne.getHours();
    minutes = (60 - timeOne.getMinutes()) + timeTwo.getMinutes();

    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minutes} MINUTO(S)`);

    return;
}

if (timeTwo.getHours() === 0 && timeTwo.getMinutes() - timeOne.getMinutes() > 0 && timeOne.getHours() != 0) {

    var hour = 24 - timeOne.getHours();
    var minutes = timeTwo.getMinutes() - timeOne.getMinutes();
   
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minutes} MINUTO(S)`);
   return;
}

else {

    var hourTotal = (timeTwo.getTime() - timeOne.getTime()) / 3600000;
    var hour = parseInt(hourTotal);
    var minutes = ((hourTotal - hour) * 60).toFixed(0);
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${minutes} MINUTO(S)`);
}


