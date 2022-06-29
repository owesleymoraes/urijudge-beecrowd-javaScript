var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numberText;
while (numberText = (lines.shift().split('\n'))) {

    let setence = parseInt(numberText[0]);
   
    if (setence === 2002) {
        console.log("Acesso Permitido");
        break;
    } else { console.log("Senha Invalida"); }

}

