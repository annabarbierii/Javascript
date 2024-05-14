function determinarTipoTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Os comprimentos dos lados devem ser maiores que zero.";
    }   
    else if (a + b <= c || a + c <= b || b + c <= a) {
        return "Os comprimentos dos lados não formam um triângulo.";
    } 
    else if (a === b && b === c) {
        return "Triângulo Equilátero (todos os lados são iguais)";
    } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles (dois lados são iguais)";
    } else {
        return "Triângulo Escaleno (todos os lados são diferentes)";
    }
}
function main() {
    const ladoA = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
    const ladoB = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
    const ladoC = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

    const tipoTriangulo = determinarTipoTriangulo(ladoA, ladoB, ladoC);
    console.log(tipoTriangulo);
}
main();
