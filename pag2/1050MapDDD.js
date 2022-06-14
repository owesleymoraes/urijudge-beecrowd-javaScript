 var input = require('fs').readFileSync('stdin','utf8');

 var ddd = parseInt(input.split("\n"));
 
 var codeDDD = new Map();

            codeDDD.set(61, "Brasilia");
			codeDDD.set(71, "Salvador");
			codeDDD.set(11, "Sao Paulo");
			codeDDD.set(21, "Rio de Janeiro");
			codeDDD.set(32, "Juiz de Fora");
			codeDDD.set(19, "Campinas");
			codeDDD.set(27, "Vitoria");
			codeDDD.set(31, "Belo Horizonte");

            if (codeDDD.has(ddd)) {
				console.log(codeDDD.get(ddd));
				
			} else {
				console.log("DDD nao cadastrado");
			}
            


 

 