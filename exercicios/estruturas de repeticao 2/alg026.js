var n = parseFloat(prompt(`Escolha um número para fazer a fatorial:`));
var cont = n; 
var fatorial = 1;
var fatores = ""; 

do {
    if (cont < n) { 
        fatores = fatores + " . ";
    }
    fatores = fatores + cont; 
    fatorial = fatorial * cont; 
    cont = cont - 1; 
} while (cont > 0); 

document.write(`${n}! = ${fatores} = ${fatorial}`);