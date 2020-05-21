const fecha = new Date();
nombre = `resources/Carita${fecha.getDay()}.png`;
document.getElementById("cara_dia").src = nombre;
if (fecha.getDay() === 0 || fecha.getDay() === 6) {
    document.getElementById("dias_fin").innerHTML = `Ya es fin de semena`;
} else {
    document.getElementById("dias_fin").innerHTML = `Quedan ${5 - fecha.getDay()} días para el fin de semana`;
}