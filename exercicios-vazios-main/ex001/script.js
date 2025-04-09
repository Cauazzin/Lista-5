const btn = document.getElementById("btn")
const Titulo = document.getElementById("Titulo")

btn.addEventListener("click", () => {
    Titulo.textContent = "Título Atualizado"
})