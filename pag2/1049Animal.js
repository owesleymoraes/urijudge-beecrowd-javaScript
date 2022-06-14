var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split("\r\n"); // uri-precisa tirar o \r.

var bones = String(lines.shift());
var animalType = String(lines.shift());
var animal = String(lines.shift());
var nameAnimal;

if (bones === "vertebrado") {

    if (animalType === "mamifero") {

        nameAnimal = animal === "onivoro" ? "homem" : "vaca";
    }

    else {
        nameAnimal = animal === "carnivoro" ? "aguia" : "pomba";
    }
    console.log(`${nameAnimal}`);
    return;
}

else {

    if (animalType === "inseto") {

        nameAnimal = animal === "herbivoro" ? "lagarta" : "pulga";
    }

    else {

        nameAnimal = animal === "onivoro" ? "minhoca" : "sanguessuga";
    }

    console.log(`${nameAnimal}`);

}



