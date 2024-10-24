var vet = [];

for (var cont = 0; cont < 4; cont++) {
    var n = parseFloat(prompt(`Digite um valor:`));
    vet.push(n);
}

for (cont = 0; cont < 3; cont++) {
    for (var j = cont + 1; j  <= 4; j++) {
        if (vet[cont] > vet[j]) {
            var tp = vet[cont];
            vet [cont] = vet [j];
            vet [j] = tp;
        }
    }
}

for (cont = 0; cont < 4; cont ++) {
    document.write(`${vet[cont]}`);
    if (cont < 3) {
        document.write(", ");
    }
}