var input = require('fs').readFileSync('stdin', 'utf8');

var [itemText, amountText] = input.split(" ");

var item = parseInt(itemText);
var amount = parseInt(amountText);

switch (item) {
    case 1:

        var value = (amount * 4.00).toFixed(2);
        console.log(`Total: R$ ${value}`);

        break;

    case 2:


        var value = (amount * 4.50).toFixed(2);
        console.log(`Total: R$ ${value}`);

        break;

    case 3:

        var value = (amount * 5.00).toFixed(2);
        console.log(`Total: R$ ${value}`);

        break;
    case 4:

        var value = (amount * 2.00).toFixed(2);
        console.log(`Total: R$ ${value}`);

        break;

    case 5:

        var value = (amount * 1.50).toFixed(2);
        console.log(`Total: R$ ${value}`);

        break;
}