let boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");
let boton4 = document.getElementById("boton4");
let boton5 = document.getElementById("boton5");
let boton6 = document.getElementById("boton6");
let imagen = document.getElementById("imagen");

boton1.addEventListener("click", function() {
	imagen.innerHTML = "<div class='imagen1'></div>";
});

boton2.addEventListener("click", function() {
	imagen.innerHTML = "<div class='imagen2'></div>";
});

boton3.addEventListener("click", function() {
	imagen.innerHTML = "<div class='imagen3'></div>";
});

boton4.addEventListener("click", function() {
	imagen.innerHTML = "<div class='imagen4'></div>";
});

boton5.addEventListener("click", function() {
	imagen.innerHTML = "<div class='imagen5'></div>";
});

boton6.addEventListener("click", function() {
	imagen.innerHTML = "<div class='imagen6'></div>";
});