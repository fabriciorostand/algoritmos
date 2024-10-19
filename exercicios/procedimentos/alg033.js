var x = 4;
var y = 6;

document.write(`x = ${x} <br>`);
document.write(`y = ${y} <br><br>`);

soma(x, y);

function soma(A, B) {
    var A = A + 1;
    var B = B + 2;
    document.write(`A = ${A} <br>`);
    document.write(`B = ${B} <br><br>`);
    document.write(`A + B = ${A + B} <br>`);
}

soma(A, B);