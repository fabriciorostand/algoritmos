var l1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
var l2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
var l3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

var tri = (l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2); //Para verificar se pode ser um triângulo

var equilatero = (l1 === l2) && (l2 === l3);
var escaleno = (l1 !== l2) && (l2 !== l3) && (l1 !== l3);
var isosceles = !equilatero && !escaleno;

if (tri && equilatero) {
    document.write(`Esse triângulo é equilatero.`);
}

if (tri && escaleno) {
    document.write(`Esse triângulo é escaleno.`);
}

if (tri && isosceles) {
    document.write(`Esse triângulo é isósceles.`);
}

if (!tri) {
    document.write(`Não é um triângulo.`)
}