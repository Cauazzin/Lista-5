document.getElementById("enviar").addEventListener("click", function () {
    const texto = document.getElementById("entrada").value;
    document.getElementById("resultado").textContent = texto;
  });