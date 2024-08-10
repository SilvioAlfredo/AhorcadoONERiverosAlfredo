// Este código contiene las entradas y algunas funciones para procesar y devolver salidas
// Entradas
var palabras = ["JAVASCRIPT", "ORACLE", "HTML", "CSS", "TYPESCRIPT", "JAVA", "LUA", "PERL", "PYTHON", "COBOL", "FORTRAN", "ADA", "C", "GDSCRIPT", "PHP", "RUBY", "DELPHI", "GO", "KOTLIN", "SCALA", "SWIFT", "SQL", "VALA", "BOO","C++", "MYSQL", "DART","C#", "RUST", "OBJECTIVE-C", "HASKELL", "ASSEMBLY", "CLOJURE",  "SMALLTALK", "JULIA", "ELIXIR", "PASCAL", "PERL 6", "VISUAL BASIC", "VISUAL BASIC .NET", "WEBASSEMBLY", ];
var letrasIncertadas = [];
var palabraSecreta = "";
var contadorErrores = 0;
var arrayAciertos = [];
var palabraConstruida = [];
var palabraExito = [];
var exito = false;

//selectores de parte del html
const contenedorPalabraCorrecta = document.querySelector('.palabraIncognita');
const classLetraIncognita = "letraIncognita";

//Esta función sirve para recorrer el arreglo "palabras", y elige aleatoriamente una de ellas.
function escogerPalabraSecreta() {
  palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
  return palabraSecreta;
}
palabraSecreta = escogerPalabraSecreta();

// función con 3 parámetros que genera parte del html y añade '-' adentro de un arreglo.
function generarLineasPalabraCorrecta(contenedor,claseli,palabraSecreta){
  for (const letra of palabraSecreta) {
    const nuevoLi = document.createElement('li');
    // nuevoLi accede a la función inner... y se le asigna una estructura de html
    nuevoLi.innerHTML = `<h3>-</h3>`;
    nuevoLi.classList.add(claseli);
    contenedor.appendChild(nuevoLi);
    palabraExito.push('-');
  }
}

// Llamada a la función, pasando los parámetros necesarios.
generarLineasPalabraCorrecta(contenedorPalabraCorrecta, classLetraIncognita, palabraSecreta)

// En esta función se procesa la entrada del teclado y se llama a una función de validación.
document.onkeydown = (e) => {
  let letra = e.key.toUpperCase();
  // Debo de incluir una regex para validar solo algunas entradas.
  if(contadorErrores < 6 && exito == false){
    validarLetra(letra)
  }
};

// selectores de parte del html
const letrasCampo = document.querySelectorAll('.letraIncognita');

const contenedorAciertos = document.querySelector('.listaCorrectas');
const classLiAciertos = 'letraCorrecta'
const cuantosAciertos = document.querySelectorAll('.letraCorrecta')

const contenedorErrores = document.querySelector('.listaIncorrectas');
const classLiErrores = 'letraIncorrecta'

//Función para validar la letra he indicar que acciones realizar en los casos planteados.
function validarLetra(letra){
  if (palabraSecreta.includes(letra) == true && letrasIncertadas.includes(letra) == false) {
    letrasIncertadas.push(letra);
    for (let i = 0; i < palabraSecreta.length; i++) {
      if (palabraSecreta[i] === letra) {
        // Reemplaza el guión por la letra acertada en el campo de incognitas
        adicionarLetraCorrecta(i,letra)
        palabraConstruida.push(letra);
        if (!arrayAciertos.includes(letra)){
          // Adiciona los aciertos que el usuario puede tener
          arrayAciertos.push(letra);
          adicionarAcierto(contenedorAciertos,classLiAciertos,letra)
        }
      }
    }
  } else if (palabraSecreta.includes(letra) == false && letrasIncertadas.includes(letra) == false) {
    adicionarLetraIncorrecta(contenedorErrores,classLiErrores,letra);
    letrasIncertadas.push(letra);
  }else{
    alert("A ingresado nuevamente la misma letra");
  }
}

function adicionarLetraCorrecta(index, letra) {
  letrasCampo[index].innerHTML = `<h3>${letra}</h3>`;
  palabraExito[index] = letra;
  evaluarExito()
}

function adicionarAcierto(contenedor, claseli, letra) {
  const nuevoLi = document.createElement('li');
  nuevoLi.innerHTML = `<h3>${letra}</h3>`;
  nuevoLi.classList.add(claseli);
  contenedor.appendChild(nuevoLi);
}

function adicionarLetraIncorrecta(contenedor,claseli,letra) {
  const nuevoLi = document.createElement('li');
  // nuevoLi accede a la función inner... y se le asigna una estructura de html
  nuevoLi.innerHTML = `<h3>${letra}</h3>`;
  nuevoLi.classList.add(claseli);
  contenedor.appendChild(nuevoLi);
  contadorErrores++;
  verificarVidas();
}

const imagenHorca = document.querySelector('.imagenHorca');

function verificarVidas() {
  switch (contadorErrores) {
    case 1:
      imagenHorca.src = './img/horca(1).png';
      break;
    case 2:
      imagenHorca.src = './img/horca(2).png';
      break;
    case 3:
      imagenHorca.src = './img/horca(3).png';
      break;
    case 4:
      imagenHorca.src = './img/horca(4).png';
      break;
    case 5:
      imagenHorca.src = './img/horca(5).png';
      break;
    case 6:
      imagenHorca.src = './img/horca(6).png';
      setTimeout(perdiste, 2500);
      break;
    default:
      // Alguna otra instrucción
      break;
  }
}

function perdiste(){
  imagenHorca.src = './img/perdiste.png';
  setTimeout(recarga, 3500);
}

// Función que evalua la condición de exito constantemente.
function evaluarExito(){
  if(palabraExito.join('') === palabraSecreta){
    setTimeout(ganaste, 2500);
    exito = true
  }
}

function ganaste(){
  imagenHorca.src = './img/ganaste.png';
  setTimeout(recarga, 3500);
}

function recarga() {
  window.location.reload();
}

texto = sessionStorage.getItem("text").toUpperCase();
palabras.push(texto);

