var anoatual = 2024;
var anodapessoa = parseFloat(prompt("Ano de nascimento:"));
var verificacao = anoatual - anodapessoa;

document.write("Departamento de Trânsito <br><br>");

if (verificacao >= 18) {
    document.write(`Idade: ${verificacao} anos <br>`)
    document.write(`Apto a tirar carteira`)
}

else {
    document.write(`Idade: ${verificacao} anos <br>`)
    document.write(`Inapto a tirar carteira.`)
}