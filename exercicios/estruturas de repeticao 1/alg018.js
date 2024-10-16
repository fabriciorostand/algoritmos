var contagem = 1;

var n = parseFloat(prompt(`Até que número você quer que eu conte?`));

while (n >= contagem) {
    document.write(`${contagem} <br>`);
    contagem = contagem + 1;
}