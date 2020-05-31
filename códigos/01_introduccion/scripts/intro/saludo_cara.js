const fecha_cara = new Date().getDay();
nombre = "resources/Carita" + fecha_cara + ".png";
console.log(nombre);

document.getElementById("cara_dia").src = nombre;