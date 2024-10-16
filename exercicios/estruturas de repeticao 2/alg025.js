var n = parseFloat(prompt(`Escolha um número para ver a tabuada:`));
var tabuada = 1 

do {
    var res = n * tabuada;
    document.write(`${n} x ${tabuada} = ${res} <br>`);
    tabuada = tabuada + 1;
} while (tabuada <= 10);