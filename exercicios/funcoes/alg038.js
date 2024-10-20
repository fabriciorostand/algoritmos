function compr(texto) {
    return texto.length;
}

function invertido(texto) {
    return texto.split('').reverse().join('')
}

var texto = prompt(`Digite uma palavra:`);

var c = compr(texto);
var M = texto.toUpperCase();
var m = texto.toLowerCase();
var i = invertido(texto);

document.write(`${texto} <br><br>`,
               `Quantidade de letras: ${c} <br>`, 
               `Em maiúsculo: ${M} <br>`, 
               `Em minúsculo: ${m} <br>`,
               `Invertido: ${i.charAt(0).toUpperCase() + i.slice(1).toLowerCase()}`);