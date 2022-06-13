var botonNuevoJuego = document.querySelector(".reload");
var botonDesistir = document.querySelector(".desistir");

botonNuevoJuego.addEventListener("click",function(event){
	event.preventDefault();
    window.location.reload();
});

botonDesistir.addEventListener("click",function(event){
	event.preventDefault();
    window.location.href = "./index.html";
});