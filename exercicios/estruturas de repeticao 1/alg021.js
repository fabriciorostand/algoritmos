var s = 0;
var cont = 1;

while (cont <= 5) {
    var n = parseFloat(prompt(`Digite o ${cont}° valor:`));
    s = s + n;
    cont = cont + 1;
}

document.write(`A soma de todos os valores digitados é ${s}`);