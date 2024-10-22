var pares = [];

for (var cont = 1; cont <= 7; cont++) {
    var v = parseFloat(prompt(`Digite o ${cont}º valor:`));
    if (v % 2 === 0) {
        pares.push(v);
    }
}

document.write(`Dos ${cont - 1} números digitados, o(s) valor(es): ${pares} são pares.`);