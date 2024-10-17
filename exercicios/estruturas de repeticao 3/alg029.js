soma = 0;

for (var nper = 1; nper <= 5; nper++) {
    var n = parseFloat(prompt(`Digite um valor:`));
    soma += n;
}

document.write(`A soma de todos valores digitados foi de: ${soma}`);