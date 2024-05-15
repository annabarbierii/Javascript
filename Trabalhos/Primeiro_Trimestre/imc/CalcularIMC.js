function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function interpretarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

function pesoSaudavel(altura, metaIMC) {
    return metaIMC * (altura * altura);
}

function sugerirPeso(peso, altura, metaIMC) {
    const pesoMeta = pesoSaudavel(altura, metaIMC);
    const pesoPerder = peso - pesoMeta;
    if (pesoPerder > 0) {
        return `Para alcançar um IMC saudável, você precisa perder aproximadamente ${pesoPerder.toFixed(2)} kg.`;
    } else if (pesoPerder < 0) {
        const pesoGanhar = -pesoPerder;
        return `Para alcançar um IMC saudável, você precisa ganhar aproximadamente ${pesoGanhar.toFixed(2)} kg.`;
    } else {
        return "Seu peso está dentro da faixa saudável.";
    }
}

function main() {
    let peso, altura;
    try {
        peso = parseFloat(prompt("Digite o peso (em kg):"));
        altura = parseFloat(prompt("Digite a altura (em metros):"));
        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            throw new Error("Peso e altura devem ser números válidos e positivos.");
        }
    } catch (error) {
        console.log(error.message);
        return;
    }

    const imc = calcularIMC(peso, altura);
    console.log("Seu IMC é:", imc.toFixed(2));
    console.log("Você está classificado como:", interpretarIMC(imc));
    if (imc < 18.5 || imc >= 25) {
        const metaIMC = 24.9; // IMC desejado para estar dentro da faixa de peso normal
        console.log(sugerirPeso(peso, altura, metaIMC));
    }
}

main();
