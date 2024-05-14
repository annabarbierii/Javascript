function calcularMediaEnem() {
    while (true) {
        const linguagens = parseFloat(prompt("Digite a nota de Linguagens: "));
        const cienciasHumanas = parseFloat(prompt("Digite a nota de Ciências Humanas: "));
        const cienciasNatureza = parseFloat(prompt("Digite a nota de Ciências da Natureza: "));
        const matematica = parseFloat(prompt("Digite a nota de Matemática: "));
        const redacao = parseFloat(prompt("Digite a nota de Redação: "));

        if (!(0 <= linguagens <= 1000) || !(0 <= cienciasHumanas <= 1000) ||
            !(0 <= cienciasNatureza <= 1000) || !(0 <= matematica <= 1000) ||
            !(0 <= redacao <= 1000)) {
            console.log("Por favor, insira notas válidas entre 0 e 1000.");
            continue;
        }

        const media = (linguagens + cienciasHumanas + cienciasNatureza + matematica + redacao) / 5;

        if (media >= 450) {
            console.log(`Média final: ${media.toFixed(2)}`);
            console.log("Status de aprovação: Aprovado para o Prouni e Fies.");
        } else {
            console.log(`Média final: ${media.toFixed(2)}`);
            console.log("Status de aprovação: Reprovado para o Prouni e Fies.");
        }
        
        break;
    }
}

calcularMediaEnem();
