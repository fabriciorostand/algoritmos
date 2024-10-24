var times = [];

for (var cont = 0; cont < 3; cont++) {
    var nometimes = (prompt(`Digite o ${cont + 1}º time:`));
    times.push(nometimes);
}

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i !== j) { 
            document.write(`${times[i]} x ${times[j]} <br>`);
        }
    }
}