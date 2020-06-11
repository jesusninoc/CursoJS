'use strict';

let miArray = [];
let miArrayCosas = ['asd', 123, 123.23, false, { nombre: "noombre", edad: 223 }];
let miArrayBoolean = [true, false, true];
let miArrayPalabras = ['asd', 'asd', 'asd', 'asd'];
let miArrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// acceder a una posición;

// asd
miArrayCosas[0];

miArrayCosas.forEach(element => {
    console.log(element);
});

// cambiar valores array

miArrayCosas[0] = "nueva cosa";
console.log(miArrayCosas[0]);

// varias dimensiones;

let arrayDimensiones = [
    ['23', 23, true],
    ['wqw', 'qwe', 'qwe']
];
arrayDimensiones[1][1];
/*
arrayDimensiones.forEach(element => {
    element.forEach(elementSecond => {
        console.log(elementSecond);
    });
});

let arrayOrdenar = [1, 2, 4, 6, 8, 9, 2, 4, 5];
arrayOrdenar.forEach(element => {
    console.log(element);
});

console.log('Ordenando array...');
arrayOrdenar.reverse();
arrayOrdenar.forEach(element => {
    console.log(element);
});
*/

let arrayUno = [1, 2, 3, 4, 5];
let arrayDos = [3, 4, 5, 7, 8, 9];
// 1,2,3,4,5,3,4,5,7,8,9
let arrayJuntar = arrayUno.concat(arrayDos);
console.log(arrayJuntar);
console.log(arrayJuntar.indexOf(4));

arrayUno.push('cosa nueva');
arrayUno.push('otra cosa nueva');
arrayUno.unshift('cosa nueva el principio');
console.log(arrayUno);
console.log('eliminando');
arrayUno.pop();
arrayUno.shift();
console.log(arrayUno);