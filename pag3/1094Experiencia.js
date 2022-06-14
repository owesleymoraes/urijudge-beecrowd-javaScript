var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [setenceText] = lines.shift().split('\n');
var setence = parseInt(setenceText);

var amountMouse = 0;
var amountFrog = 0;
var amountBunny = 0;
var amountTotal = 0;


for (var index = 1; index <= setence; index++) {

    var [amountAnimalText, typeAnimal] = lines.shift().split(" ");
    var amountAnimal = parseInt(amountAnimalText);
   
    switch (typeAnimal) {

        case 'R':
            amountMouse += amountAnimal;
            break;

        case 'S':
            amountFrog += amountAnimal;
            break;

        case 'C':
            amountBunny += amountAnimal;
            break;

    }

}

amountTotal = amountBunny + amountFrog + amountMouse;

var percentegeBunny = ((amountBunny / amountTotal) * 100).toFixed(2);
var percentegeFrog = ((amountFrog / amountTotal) * 100).toFixed(2);
var percentegeMouse = ((amountMouse / amountTotal) * 100).toFixed(2);

console.log(`Total: ${amountTotal} cobaias`);
console.log(`Total de coelhos: ${amountBunny}`);
console.log(`Total de ratos: ${amountMouse}`);
console.log(`Total de sapos: ${amountFrog}`);
console.log(`Percentual de coelhos: ${percentegeBunny} %`);
console.log(`Percentual de ratos: ${percentegeMouse} %`);
console.log(`Percentual de sapos: ${percentegeFrog} %`);
