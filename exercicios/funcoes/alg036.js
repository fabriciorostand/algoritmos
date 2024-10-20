function fatorial(v) {
    var fat = 1;
    do { 
        fat = fat * v; 
        v = v - 1; 
    } while (v > 0); 
    return fat;
}

var n = parseFloat(prompt(`Escolha um número para fazer a fatorial:`));

var resfatorial = fatorial(n);

document.write(`${n}! = ${resfatorial}`);