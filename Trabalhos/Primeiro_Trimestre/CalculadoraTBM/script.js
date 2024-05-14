function calcularTMB() {
  const x = document.getElementById("linguagens1").value.toLowerCase(); // Convertendo o valor para minúsculas
  const y = parseFloat(document.getElementById("linguagens2").value);
  const w = parseFloat(document.getElementById("linguagens3").value);
  const z = parseFloat(document.getElementById("linguagens4").value);

  if (x === "masculino") {
      let homem = 88362 + (13397 * w) + (4799 * y) - (5677 * z);
      alert("Sendo do gênero masculino, seu TMB é: " + homem.toFixed(2)); // Limitando para duas casas decimais
  } else if (x === "feminino") {
      let mulher = 447.593 + (9.247 * w) + (3.098 * y) - (4.330 * z);
      alert("Sendo do gênero feminino, seu TMB é: " + mulher.toFixed(2)); // Limitando para duas casas decimais
  } else {
      alert("Por favor, digite 'Masculino' ou 'Feminino' como gênero.");
  }
}

document.getElementById("calcularButton").addEventListener("click", calcularTMB);
