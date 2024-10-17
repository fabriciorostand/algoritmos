var termosfibo = parseFloat(prompt(`Quantos termos da sequência de Fibonacci você gostaria de ver?`));

var n1 = 0;
var n2 = 1;

document.write(`Sequência dos ${termosfibo} primeiros números da sequência de Fibonacci: ${n2}`);

for (var fibo = 2; fibo <= termosfibo; fibo++) {
    var proxn = n1 + n2;
    document.write(`, ${proxn}`);

    n1 = n2;
    n2 = proxn;
}