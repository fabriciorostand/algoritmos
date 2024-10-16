document.write("Colégio Giuseppe Camolli <br><br>");

var n1 = parseFloat(prompt(`Primeira Nota:`).replace(',', '.'));
var n2 = parseFloat(prompt(`Segunda Nota:`).replace(',', '.'));

var media = (n1 + n2)/2;

document.write(`Média: ${media} <br>`);

if (media >= 5) {
    document.write(`Aluno Aprovado!`)
}

else {
    if (media >= 4 && media <= 4.9)
    document.write(`Aluno em Recuperação!`)
    else {
        document.write(`Aluno Reprovado!`)
    }
}