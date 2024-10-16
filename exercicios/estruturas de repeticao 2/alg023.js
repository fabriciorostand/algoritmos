var s = 0;

do {
    var n = parseFloat(prompt(`Digite o valor:`));
    s = s + n;
    var resp = prompt(`Você quer continuar? [s/n]`);
} while (resp === "s");

document.write(`A soma de todos os valores digitados é: ${s}`);