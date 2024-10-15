var vreal = parseFloat(prompt("Digite o valor em real brasileiro:")).toFixed(2)
var vdolar = 5.48;
var vconv = parseFloat(vreal/vdolar).toFixed(2);

document.write(`R$${vreal.replace('.', ',')} equivalem a US$${vconv.replace('.', ',')} atualmente.`);