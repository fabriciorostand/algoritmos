var n1 = parseFloat(prompt("Primeira Nota (0 - 10):"));
var n2 = parseFloat(prompt("Segunda Nota (0 - 10):"));

var media = (n1 + n2)/2;

if (media <= 10 && media >= 9) {
    document.write(`Aproveitamento: A`);
} 

else if (media <= 8.9 && media >= 8) {
    document.write(`Aproveitamento: B`);
}

else if (media <= 7.9 && media >= 7) {
    document.write(`Aproveitamento: C`);
}

else if (media <= 6.9 && media >= 6) {
    document.write(`Aproveitamento: D`);
}

else if (media <= 5.9 && media >= 5) {
    document.write(`Aproveitamento: E`);
}
 
else {
    document.write(`Aproveitamento: F`);
}   