var input = require("fs").readFileSync("stdin", "utf8");

var timeSecundsText = input.split("\n");
var timeSecund = parseInt(timeSecundsText);

var hour = parseInt(timeSecund / 3600);
var minutos = Math.round(parseInt(((timeSecund / 3600) - hour) * 60));
var secundes = Math.round(((((timeSecund / 3600) - hour) * 60) - minutos) * 60);

console.log(hour + ":" + minutos + ":" + secundes);
