var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\n");

var lineOne = lines.shift().split(" ");
var lineTwo = lines.shift().split(" ");

var A = parseFloat(lineOne[0]);
var B = parseFloat(lineOne[1]);
var C = parseFloat(lineOne[2]);
var D = parseFloat(lineOne[3]);


var med = (((A * 2) + (B * 3) + (C * 4) + (D * 1)) / 10.00);

if (med >= 7.0) {
    console.log(`Media: ${med.toFixed(1)}\nAluno aprovado.`);
    return;
}

if (med < 5.0) {
    console.log(`Media: ${med.toFixed(1)}\nAluno reprovado.`);
    return;
}

if (med >= 5.0 && med <= 6.9) {
    var noteExam = parseFloat(lineTwo[0]);
   

    console.log(`Media: ${med.toFixed(1)}\nAluno em exame.\nNota do exame: ${noteExam.toFixed(1)}`);

    var finalMed = ((noteExam + med) / 2.00);

    finalMed >= 5.0 ? console.log(`Aluno aprovado.\nMedia final: ${finalMed.toFixed(1)}`) :
        console.log(`Aluno reprovado.\nMedia final: ${finalMed.toFixed(1)}`);

}



