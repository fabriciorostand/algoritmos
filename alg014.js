document.write(`Criança Esperança <br><br>`);

var donation = parseFloat(prompt(`Valor da doação:`));

switch (donation) {
    case 10:
        document.write(`Muito obrigado por doar R$10,00!`);
        break;
    case 25:
        document.write(`Muito obrigado por doar R$25,00!`);
        break;
    case 50:
        document.write(`Muito obrigado por doar R$50,00!`);
        break;   
    case 100:
        document.write(`Muito obrigado por doar R$100,00!`);
        break;   
    default:
        document.write(`Valor da doação inválido.`);
        break;
}