var altura = parseFloat(prompt("Altura (m):").replace(',', '.'));
var massa = parseFloat(prompt("Peso (kg):"));

var imc = massa / (Math.pow(altura, 2));

document.write(`IMC: ${imc.toFixed(1)}<br>`)

if (imc < 17) {
    document.write(`Muito abaixo do peso.`);
} 

else if (imc >= 17 && imc <= 18.4) {
    document.write(`Abaixo do peso.`);
} 

else if (imc >= 18.5 && imc <= 24.9) {
    document.write(`Peso ideal.`);
} 

else if (imc > 24.9 && imc <= 30) {
    document.write(`Sobrepeso.`);
} 

else if (imc > 30 && imc <= 35) {
    document.write(`Obesidade.`);
} 

else if (imc > 35 && imc <= 40) {
    document.write(`Obesidade Severa.`);
} 

else { // IMC acima de 40
    document.write(`Obesidade Mórbida.`);
}