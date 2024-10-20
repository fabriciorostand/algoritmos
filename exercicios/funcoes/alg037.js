function fibonacci(termosfibo) {
    var n1 = 0;
    var n2 = 1;
    var resultado = `Sequência dos ${termosfibo} primeiros números da sequência de Fibonacci: ${n2}`;
    
    for (var fibo = 2; fibo <= termosfibo; fibo++) {
        var proxn = n1 + n2;
        resultado = resultado + `, ${proxn}`;
    
        n1 = n2;
        n2 = proxn;
    } 

    return resultado;
}

var termosfibo = parseFloat(prompt(`Quantos termos da sequência de Fibonacci você gostaria de ver?`));

var sequencia = fibonacci(termosfibo);

document.write(sequencia);