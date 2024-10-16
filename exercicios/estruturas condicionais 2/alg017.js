var golsvasco = parseFloat(prompt("Vasco:"));
var golsibis = parseFloat(prompt("Ibis:"));

var difgols = golsvasco - golsibis;

document.write(`Vasco ${golsvasco} x ${golsibis} Ibis <br>`)
document.write(`Diferença de gols: ${Math.abs(difgols)} <br>`)

switch (Math.abs(difgols)) {
    case 0:
        document.write(`Status: Empate`)
        break;
    case 1:
    case 2:
    case 3:
        document.write(`Status: Partida normal`)
        break;
    default:
        document.write(`Status: Goleada`)
        break;
}