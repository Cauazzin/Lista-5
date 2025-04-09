const botao = document.getElementById("toggleBtn");
const paragrafo = document.getElementById("paragrafo");

botao.addEventListener("click", () => {
  paragrafo.classList.toggle("escondido");
});