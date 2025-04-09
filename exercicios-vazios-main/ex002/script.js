const botaoAdicionar = document.getElementById("adicionar")
const lista = document.getElementById("lista")

botaoAdicionar.addEventListener("click", () => {
  const novoItem = document.createElement("li")
  novoItem.textContent = "Novo Item"
  lista.appendChild(novoItem)
})