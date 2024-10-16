var ini = parseFloat(prompt(`Início:`));
var fim = parseFloat(prompt(`Fim:`));

if (ini <= fim) {
    while (ini <= fim) {
        document.write(`${ini} <br>`);
        ini = ini + 1 
    }    
}

else {
    while (ini >= fim) {
        document.write(`${ini} <br>`);
        ini = ini - 1
    }
}