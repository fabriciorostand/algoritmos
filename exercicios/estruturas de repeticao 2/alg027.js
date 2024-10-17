var n = parseFloat(prompt(`Digite um número para verificar se é primo ou não:`));

var cont = 1;
var contdiv = 0;

do {
    if  (n % cont === 0) {
        contdiv = contdiv + 1;
    }
    cont = cont + 1;
} while (cont <= n);

if (contdiv === 2) {
    document.write(`O número ${n} é primo.`);
}
else {
    document.write(`O número ${n} não é primo.`);
}