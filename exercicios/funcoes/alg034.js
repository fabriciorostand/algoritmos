function soma(x, y) {
    return x + y;
}

var v1 = parseFloat(prompt(`Digite o primeiro valor:`));
var v2 = parseFloat(prompt(`Digite o segundo valor:`));

s = soma(v1, v2);

document.write(`Soma dos valores: ${s}`);