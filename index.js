const readline = require('readline');
// Skriv ett nytt skript som spelar "gissa talet" med användaren. Reglerna är:
// Spelet slumpar ett hemligt tal mellan 1 och 100.
// Spelet ber spelaren gissa talet. (Skriptet räknar antalet gissningar.)
// Om spelaren gissar rätt, ska programmet gratulera och visa antalet gissningar.
// Om spelaren gissar fel, ska programmet tala om ifall det hemliga talet är större eller mindre än det gissade. Sedan upprepar skriptet från steg 2.

// 1. slumpa tal mellan 1-100;
let randomNumber = Math.ceil(Math.random() * 100);
let guesses = 0;

// 2. ge prompt till användaren "Gissa tal mellan 1-100"
// skapa interface för input och output
let rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    });

// rl.question("Gissa på ett tal mellan 1-100 ", (answer) => {
//     // gör detta så länge användaren inte gissat rätt
//     if (answer == randomNumber) {
//         console.log('Du gissade rätt!');
//     } else if (answer > randomNumber) {
//         console.log('Du gissade för högt');
//     } else {
//         console.log('Du gissade för lågt');
//     }
//     console.log('Du svarade: ' + answer + ' och riktiga siffran var ' + randomNumber);
//     rl.close();
// });

rl.setPrompt('Gissa siffran! (1-100) ');
rl.prompt();
rl.on('line', (answer) => {
    guesses++;
    if (answer == randomNumber) {
        console.log('YAY');
    } else if (answer > randomNumber) {
        console.log(answer + ' är för högt, gissa lägre. Du har gissat ' + guesses + ' gånger nu.');
    } else {
        console.log('för lågt');
    }

});