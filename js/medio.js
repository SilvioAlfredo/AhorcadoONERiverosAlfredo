var botonCancelar = document.querySelector(".cancelar");

botonCancelar.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./index.html";
});

var botonGuardar = document.querySelector(".guardarStart");
var entrada = document.querySelector(".entrada");
var expreg = new RegExp(/[a-zA-Z]+/g);

botonGuardar.addEventListener("click", function (event) {
  event.preventDefault();
  validarCadena();
});

function validarCadena() {
  let texto = entrada.value;
  text = texto.toUpperCase();
  if (text.length > 8) {
    alert("El texto excede el tamaño requerido!");
    entrada.focus();
  } else if (entrada.value == "") {
    alert("campo incorrecto!");
    entrada.focus();
  } else if (expreg.test(text)) {
    sessionStorage.setItem("text", document.querySelector(".entrada").value);
    window.location.href = "./horca.html";
  } else if (!expreg.test(text)) {
    alert("expresión incorrecta!");
    entrada.focus();
  }
}
