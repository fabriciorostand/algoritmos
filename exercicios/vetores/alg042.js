var talunos = parseInt(prompt(`Total de alunos da sala:`));

document.write(`LISTAGEM DE ALUNOS<br><br>`)

var nm = [];

for (var cont = 1; cont <= talunos; cont++) {
    var nome = prompt(`Aluno ${cont}\n\nNome do aluno:`);
    var n1 = parseFloat(prompt(`Aluno ${cont}\n\nPrimeira nota:`));
    var n2 = parseFloat(prompt(`Aluno ${cont}\n\nSegunda nota:`));
    media = (n1 + n2) / 2;

    nm.push({ nome: nome, media: media });
}

document.write('<table border="1" style="width: 50%; text-align: left; margin-top: 20px;">');
document.write('<tr><th>Nome</th><th>Média</th></tr>');

for (var i = 0; i < nm.length; i++) { // Loop pelo array nm
    document.write(`<tr><td>${nm[i].nome}</td><td>${nm[i].media.toFixed(1)}</td></tr>`); // Adiciona cada aluno na tabela
}

document.write('</table>');