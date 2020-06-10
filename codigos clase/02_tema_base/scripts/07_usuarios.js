'use strict';

// dialogo;
let nombre = 'Borja'

// confirmación

/*
let confirmacion = confirm(`${nombre}, ¿estás seguro que quiere continuar?`);

if (confirmacion) {
    alert(`Hola ${nombre} bienvenido has querido continuar`);
} else {
    alert(`Hasta luego`);
}
*/

nombre = prompt('Por favor introduce tu nombre');

/*if (nombre.length > 0) {
    alert(`Hola ${nombre} bienvenido a la aplicación`);
} else {
    nombre = prompt('se que soy pesado pero mete tu nombre');
}*/

while (nombre.length <= 0) {
    nombre = prompt('se que soy pesado pero mete tu nombre');
}

alert(`Hola ${nombre} bienvenido a la aplicación`);