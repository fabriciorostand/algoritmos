var dinheiro = parseFloat(prompt("Quanto dinheiro você tem?"))

if (dinheiro > 10000) {
    document.write(`Partiu Disney`)
}

else {
    if (dinheiro >= 5000 && dinheiro < 10000) 
        document.write(`Visitar família`)
    else {
        document.write(`#chateado`)
    }
}