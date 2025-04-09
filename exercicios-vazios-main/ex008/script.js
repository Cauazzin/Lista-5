function somarNumeros(num1, num2) {
    return num1 + num2;
  }
  
  document.getElementById("somar").addEventListener("click", function () {
    const valor1 = Number(prompt("Digite o primeiro número:"));
    const valor2 = Number(prompt("Digite o segundo número:"));
  
    const resultado = somarNumeros(valor1, valor2);
    document.getElementById("resultado").textContent = `A soma é: ${resultado}`;
  });