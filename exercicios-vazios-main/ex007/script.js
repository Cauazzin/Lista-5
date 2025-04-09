function digaOla(nome) {
    const p = document.getElementById("mensagem");
    p.textContent = `Olá, ${nome}!`;
  }
  
  document.getElementById("botao").addEventListener("click", function () {
    const nome = prompt("Digite seu nome:");
    if (nome) {
      digaOla(nome);
    }
  })