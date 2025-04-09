function formatarTexto(texto) {
    const textoMaiusculo = texto.toUpperCase();
    const tamanho = texto.length;
    return `${textoMaiusculo} (${tamanho} caracteres)`;
  }
  
  document.getElementById("formatar").addEventListener("click", function () {
    const entrada = prompt("Digite um texto:");
    if (entrada) {
      const resultado = formatarTexto(entrada);
      document.getElementById("resultado").textContent = resultado;
    }
  });