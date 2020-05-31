const fecha = new Date();
estilo = "maniana";
dia = "";
switch (fecha.getDay()) {
    case 0:
        dia = "Domingo";
        break;
    case 1:
        dia = "Lunes";
        break;
    case 2:
        dia = "Martes";
        break;
    case 3:
        dia = "Miercoles";
        break;
    case 4:
        dia = "Jueves";
        break;
    case 5:
        dia = "Viernes";
        break;
    case 6:
        dia = "Sabado";
        break;
}


//console.log(fecha.getHours());

function formatearFecha(fecha_arg) {
    //dia = (Date)(fecha_arg).getDay();
    //mes = (Date)(fecha_arg).getMonth();
    //saludo = `${dia}/${mes}`;
}

//formatearFecha(fecha);

if (fecha.getHours() >= 12 && fecha.getHours() < 20) {
    document.getElementById("saludo").innerHTML = "Buenas tardes, hoy es " + dia;
    estilo = "maniana";
} else if (fecha.getHours() > 20 && fecha.getHours() < 5) {
    document.getElementById("saludo").innerHTML = "Buenas noches, hoy es " + saludo;
    estilo = "tarde";
} else {
    document.getElementById("saludo").innerHTML = "Buenas días, hoy es " + saludo;
    estilo = "noche";
}

//document.getElementById("saludo").innerHTML = `hoy es ${fecha.getDay()}`

document.getElementById("saludo").className = estilo;