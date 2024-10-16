var nomef = prompt("Nome do funcionário:");
var salariof = parseFloat(prompt("Salário do funcionário:"));
var depenf = parseFloat(prompt("Quantidade de dependentes:"));

switch (depenf) {
    case 0:
        var nsalariof = salariof + (salariof*5/100);
        break;
    case 1:
    case 2:
    case 3:
        var nsalariof = salariof + (salariof*10/100);
        break;
    case 4:
    case 5:
    case 6:
        var nsalariof = salariof + (salariof*15/100);
        break;
    default:
        var nsalariof = salariof + (salariof*18/100);
        break;
}

document.write(`Nome do funcionário: ${nomef} <br>`);
document.write(`Novo salário: R$${nsalariof.toFixed(2)}`);