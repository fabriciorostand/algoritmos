var nalunos = parseFloat(prompt(`Quantos alunos a turma tem?`));
var maiorNota = 0; 
var alunomaiornota = (``)

while (nalunos > 0) {
    var nomealuno = prompt(`Nome do Aluno:`); 
    var notaaluno = parseFloat(prompt(`Nota do ${nomealuno}:`)); 

    if (notaaluno >= maiorNota) {
        maiorNota = notaaluno; // Atualiza a maior nota
        alunomaiornota = nomealuno
    }

    nalunos--; // Decrementa o número de alunos
}

document.write(`A maior nota é do(a) ${alunomaiornota} que tirou ${maiorNota}`);