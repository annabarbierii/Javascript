let numero = parseInt(prompt("Digite um número"));
if (numero >= 100) {
    console.log("O número é maior ou igual a 100");
} else {
    let dezena = parseInt(numero / 10);
    console.log("Dezena:", dezena);
    let unidade = numero % 10;
    console.log("Unidade:", unidade);
    let soma = dezena + unidade;
    console.log("A soma dos dígitos é:", soma);
}
