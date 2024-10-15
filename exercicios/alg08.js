var vemp = parseFloat(prompt("Valor do empréstimo:"));
var parcelas = parseFloat(prompt("Em quantas parcelas:"))

var juros = 20;

var vapagar = (vemp + (vemp * juros/100)) / parcelas;

document.write(`Valor total a pagar do empréstimo será de ${parcelas} parcelas de R$ ${vapagar.toFixed(2).replace('.' , ',')}.`);