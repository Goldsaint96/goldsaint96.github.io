function cambiarColor() {
    var colores = ["red", "pink", "orange", "white"];
    var colorActual = document.body.style.backgroundColor;
    var nuevoColor;
  
    do {
      nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    } while (nuevoColor === colorActual);
  
    document.body.style.backgroundColor = nuevoColor;
  }



var titulo = document.getElementById("titulo");
var mensaje = document.getElementById("mensaje");

// Mostrar el mensaje al pasar el mouse sobre el título
titulo.addEventListener("mouseover", function() {
  mensaje.style.display = "block";
});

// Ocultar el mensaje al quitar el mouse de encima del título
titulo.addEventListener("mouseout", function() {
  mensaje.style.display = "none";
});
