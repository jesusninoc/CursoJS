"use strict";
// if - else if elseif elseif else

let nota = 10;

/*if (nota > 5) {
    console.log('aprobado');
} else {
    console.log('suspenso');
}*/

if (nota > 5) {
    console.log('aprobado');
    if (nota < 7) {
        console.log('bien');
    } else if (nota < 8)
        console.log('bastante bien');
    else if (nota < 9)
        console.log('muy bien');
    else if (nota === 10)
        console.log('perfecto');
} else {
    console.log('suspenso');
}

// if ternario
// condicion ? ejecucion_tru : ejecucion_false
//let numeroUno = -23;
//let numeroDos = 10;

// (numeroUno > numeroDos) ? console.log('El primer numero es mayor'): console.log('El primer numero es menor');
//(numeroUno != 0) ? alert('El numero es diferente a 0'): alert('El numero es igual a 0');

/*if (numeroUno > 0) {
    (numeroUno > 10) ? alert('El numero es mayor que 10'): alert('El numero es menor igual que 10');
} else {
    console.log('es menor o igual');
}*/

// switch

/*
let varSwitch = "asd";
switch (varSwitch) {
    case 1:
        console.log(`La variable a evaluar tiene como valor un uno`);
        break;
    case 2:
        console.log(`La variable a evaluar tiene como valor un dos`);
        break;
    case 3:
        console.log(`La variable a evaluar tiene como valor un tres`);
        break;
    default:
        console.log(`La variable a evaluar no tiene valor contemplado`);
        break;
}
let nombre = "pepe";
switch (nombre.toLocaleUpperCase()) {
    case "Borja":
        console.log('usuarios borja');
        break;
    case "Pepe":
        console.log('usuarios pepe');
        break;
    case "Jose":
        console.log('usuarios jose');
        break;
    default:
        console.log('usuario no contemplado');
        break;
}*/

// while

/*let numero = 5;
while (numero > 0) {
    alert(`El número aún no es 0, su valor es ${numero}`);
    numero--;
}*/
/*
let numero = 5;
do {
    alert(`El número aún no es 0, su valor es de ${numero} `);
    numero--;
} while (numero > 0);*/

/*
for (let index = 10; index >= 0; index--) {
    console.log(index);
}

// 0,1,2,3
let arrayPalabras = ['palabra uno', 'palabra dos', 'palabra tres', 'palabra cuatro'];

for (let index = 0; index < arrayPalabras.length; index++) {
    console.log(arrayPalabras[index]);

}*/

let arrayPalabras = ['palabra uno', 'palabra dos', 'palabra tres', 'palabra cuatro'];
let numero = 23;

/*
public void funcion(parámetros){
    // acciones
}

foreach (String elemento : coleccion){
    sout (elemento)
}
(argumento/os) => {ejecución}
*/

arrayPalabras.forEach((param, index) =>
    console.log(`El elemento iterado es ${index} ${param}`)
);