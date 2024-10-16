var s = 0;
var resp = "s";

while (resp === "s") {
    var n = parseFloat(prompt(`Digite o valor:`));
    s = s + n;
    resp = prompt(`Você quer continuar? [s/n]`);
}

document.write(`A soma de todos os valores digitados é: ${s}`);