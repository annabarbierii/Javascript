function calcularMediaENEM() {
    let notas = [];
    let areas_conhecimento = ["Linguagens", "Humanas", "Natureza", "Matematica", "Redacao"];

    for (let i = 0; i < areas_conhecimento.length; i++) {
        let nota = parseFloat(document.getElementById("nota" + areas_conhecimento[i]).value);
        if (isNaN(nota) || nota < 0 || nota > 1000) {
            alert("Por favor, insira uma nota válida para " + areas_conhecimento[i]);
            return;
        }
        notas.push(nota);
    }

    if (notas[4] === 0) {
        alert("A nota da redação não pode ser zero. O aluno está reprovado.");
        return;
    }

    let media = calcularMedia(notas);
    let status = media >= 450 ? "Aprovado" : "Reprovado";
    let mensagem = "Sua média final no ENEM é: " + media.toFixed(2) + "<br>Status: " + status;

    document.getElementById("resultado").innerHTML = mensagem;
}

function calcularMedia(notas) {
    let total = 0;
    for (var i = 0; i < notas.length; i++) {
        total += notas[i];
    }
    return total / notas.length;
}
