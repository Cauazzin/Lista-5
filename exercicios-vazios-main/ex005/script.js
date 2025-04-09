function calcularQuadrado(numero) {
    return numero * numero
  }
  
  document.getElementById("calcular").addEventListener("click", function () {
    const valor = document.getElementById("numero").value
    const resultado = calcularQuadrado(Number(valor))
    alert("O quadrado de " + valor + " é " + resultado)
  })