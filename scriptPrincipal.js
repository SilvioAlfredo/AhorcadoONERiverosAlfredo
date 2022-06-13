var palabras = ["ALURA" , "JAVASCRIPT" , "ORACLE" , "HTML" , "CSS" , "TYPESCRIPT", "JAVA" , "LUA" , "PERL" , "PYTHON" , "COBOL" , "FORTRAN" , "ADA" , "C" , "GDSCRIPT" , "PHP" , "RUBY" , "COFFEESCRIPT" , "DELPHI" , "GO" , "KOTLIN" , "SCALA" , "SWIFT" , "SQL" , "VALA" , "BOO"]; 
var letras = [];
var palabraCorrecta = "";
var errors = 0;
var aciertos = [];
var arrayErrores = [];
var letrasPosibles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function asistirDibujo(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
}
//lógica del ahorcado.
var tablero = document.getElementById("horca").getContext("2d"); 

function escogerPalabraSecreta(){
    var palabra = palabras [Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabra)
    return palabra
}

function dibujarLineas(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    var ancho = 600/palabraSecreta.length
    for(let i = 0 ; i < palabraSecreta.length ; i++){
        tablero.moveTo(300 + (ancho * i) , 640)
        tablero.lineTo(350 + (ancho * i) , 640)
    }
    tablero.stroke()
    tablero.closePath()
}dibujarLineas(escogerPalabraSecreta())

function escribirLetraCorrecta(index){
    tablero.font = "bold 52px serif"
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"
    var ancho = 600 / palabraSecreta.length
    tablero.fillText(palabraSecreta[index] , 305 + (ancho * index) , 620)
    aciertos.push(palabraSecreta[index])
}

function escribirLetraIncorrecta(letra , errorsLeft){
    tablero.font = "bold 40px serif"
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"
    var ancho = 600 / palabraSecreta.length
    tablero.fillText(letra, 335 + (40 * (10 - errorsLeft)) , 710 , 40)
    arrayErrores.push(palabraSecreta[errorsLeft])
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase()

}

function adicionarLetraincorrecta(letter){
    if(palabraSecreta.indexOf(letter) <= 0){
        console.log(errors);
        errors++;
        escribirMuñeco();
    }
} 

document.onkeydown = (e) => {
    let letra = e.key.toUpperCase()
    if(palabraSecreta.includes(letra) == true && letras.includes(letra) == false && letrasPosibles.includes(letra) == true){
        adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
        letras.push(letra)
        for(let i = 0 ; i < palabraSecreta.length ; i++){
            if(palabraSecreta[i] === letra){
                escribirLetraCorrecta(i)
                ganaste();        
            }
        }
    }else if(palabraSecreta.includes(letra) == false && letras.includes(letra) == false && letrasPosibles.includes(letra) == true){
        adicionarLetraincorrecta(letra)
        escribirLetraIncorrecta(letra, errors)
        letras.push(letra)            
    }
}

function ganaste(){
    if(aciertos.length == palabraSecreta.length){
        tablero.font = "bold 52px serif"
        tablero.lineWidth = 6
        tablero.lineCap = "round"
        tablero.lineJoin = "round"
        tablero.translate(10, 50);
        tablero.fillStyle = "Green";
        tablero.fillText("Ganaste!!!", 405, 320);
        setTimeout(recarga, 10000);
    }
}

//función para agregar palabra.


tablero.fillStyle = "lightgrey"
tablero.fillRect(500,150, 400, 400);

function escribirMuñeco(){
    switch(errors){
        case 1:
            //dibujar horca.
            asistirDibujo();

            tablero.beginPath();
            tablero.moveTo(600,400);
            tablero.lineTo(400,400);
            tablero.stroke(); 
            tablero.closePath(); 

            tablero.beginPath();
            tablero.moveTo(400,400);
            tablero.lineTo(400,200);
            tablero.stroke(); 
            tablero.closePath();

            tablero.beginPath();
            tablero.moveTo(400,200);
            tablero.lineTo(500,200);
            tablero.stroke(); 
            tablero.closePath();

            tablero.beginPath();
            tablero.moveTo(500,200);
            tablero.lineTo(500,250);
            tablero.stroke(); 
            tablero.closePath();

        break;
        case 2:
            //dibujar cabeza.
            tablero.beginPath();
            tablero.arc(500, 270, 20, 0, 2*3.14);
            tablero.stroke(); 
            tablero.closePath();
        break;
        case 3:
            //dibujar torzo.
            asistirDibujo();
            tablero.beginPath();
            tablero.moveTo(500,290);
            tablero.lineTo(500,340);
            tablero.stroke(); 
            tablero.closePath();
        break;
        case 4:
            //dibujar brazo derecho.
            asistirDibujo();
            tablero.beginPath();
            tablero.moveTo(500,290);
            tablero.lineTo(470,320);
            tablero.stroke(); 
            tablero.closePath();
        break;
        case 5:
            //dibujar brazo izquierdo.
            asistirDibujo();
            tablero.beginPath();
            tablero.moveTo(500,290);
            tablero.lineTo(530,320);
            tablero.stroke(); 
            tablero.closePath();
        break;
        case 6:
            //dibujar pierna derecha.
            asistirDibujo();
            tablero.beginPath();
            tablero.moveTo(500,340);
            tablero.lineTo(470,370);
            tablero.stroke(); 
            tablero.closePath();
        break;
        case 7:
            //dibujar pierna izquierda.
            asistirDibujo();
            tablero.beginPath();
            tablero.moveTo(500,340);
            tablero.lineTo(530,370);
            tablero.stroke(); 
            tablero.closePath();
            perdido();
            setTimeout(recarga, 3000);
        break;
    }
}

function perdido(){
    tablero.font = "bold 52px serif"
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.translate(10, 50);
    tablero.fillStyle = "Red";
    tablero.fillText("Perdiste!!!", 405, 320);
}
function recarga(){
    window.location.reload()
}
texto = sessionStorage.getItem("text").toUpperCase();
console.log(texto);
palabras.push(texto);