const prompt = require("prompt-sync")();
maxPower = prompt("Enter max power: ");

for(i = 0; i<= maxPower; i++){
    console.log(Math.pow(2, i));
}