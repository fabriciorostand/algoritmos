var x = parseFloat(prompt(`Digite o primeiro valor:`));
var y = parseFloat(prompt(`Digite o segundo valor:`));

function soma(x, y) {
    document.write(`Primeiro valor: ${x} <br>`);
    document.write(`Segundo valor: ${y} <br>`);
    document.write(`A soma dos valores é: ${x + y}`);
}

soma(x, y);