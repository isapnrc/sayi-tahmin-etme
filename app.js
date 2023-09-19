const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);

let guesses = 0;


while (true) {
    guesses++;

    const guess = Number(prompt("Sayiyi tahmin edin (0-100); "));
    if (guess > target) {
        console.log("Girdiğin sayi çok büyük.");
    } else if (guess < target) {
        console.log("Girdiğin sayi çok küçük.");
    } else {
        console.log("Doğru tahmin.");
        break;
    }
}
console.log(guesses, " denemede doğru sayiyi buldun.");
