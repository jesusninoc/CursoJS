'use strict'

console.log('script cargado correctamente');

// string  --> palabras
// number --> numeros: 3 3.34
// boolean --> v o f
// null --> no tiene declaración
// undefined --> esta declarado pero no se le asigna valor

// mod_acceso nombre = valor
// var let const

let palabra = "valor de palabra";
let numero = 3;
let existe = true;
let nulo = null;
let sinDefinir;

console.log(palabra);
console.log(typeof (palabra));

console.log(numero);
console.log(typeof (numero));

console.log(existe);
console.log(typeof (existe));

console.log(nulo);
console.log(typeof (nulo));

console.log(sinDefinir);
console.log(typeof (sinDefinir));

// cambios de tipos

console.log('Cambiado tipos de variables.....');

palabra = null;
numero = "esto ya no es un numero"
existe = 3.14;
nulo = "esto ya no es nulo";
sinDefinir = 34;

console.log(palabra);
console.log(typeof (palabra));

console.log(numero);
console.log(typeof (numero));

console.log(existe);
console.log(typeof (existe));

console.log(nulo);
console.log(typeof (nulo));

console.log(sinDefinir);
console.log(typeof (sinDefinir));

// declaración de constantes

console.log('Declaración de variables');

const VARIABLE_UNO = 1;
console.log(VARIABLE_UNO);
// imposible VARIABLE_UNO = 2;

// trabajo con variables





