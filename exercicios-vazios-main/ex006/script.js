function converterDolarParaReal(dolar) {
    const taxa = 5.65;
    return dolar * taxa;
  }
  
  document.getElementById("converter").addEventListener("click", function () {
    const valorDolar = prompt("Digite o valor em dólares:");
    const valorConvertido = converterDolarParaReal(Number(valorDolar));
  
    document.getElementById("resultado").textContent =
      `US${valorDolar} = R$${valorConvertido.toFixed(2)}`;
  });