function ParOuImpar(v) {
    if (v % 2 === 0) {
        return `${v} é par.`;
    }
    else {
        return `${v} é ímpar.`;
    }
}

var n = parseFloat(prompt(`Digite um número para verificar se é par ou ímpar:`));

var r = ParOuImpar(n);

document.write(r);