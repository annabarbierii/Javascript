const numero1 = parseFloat(prompt("Número 1: "));
const numero2 = parseFloat(prompt("Número 2: "));
const numero3 = parseFloat(prompt("Número 3: "));

let maior = numero1;

if (numero2 > maior) maior = numero2;
if (numero3 > maior) maior = numero3;

console.log("O maior é:", maior);
