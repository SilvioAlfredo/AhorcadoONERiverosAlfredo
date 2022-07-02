var botonStart = document.querySelector(".start");
var botonAgregarPalabra = document.querySelector(".ingresarPalabra");

botonStart.addEventListener("click",function(event){
	event.preventDefault();
    window.location.href = "./horca.html";
});

botonAgregarPalabra.addEventListener("click",function(event){
	event.preventDefault();
    window.location.href = "./input.html";
});

