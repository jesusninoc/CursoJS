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

let numeroUno = 5;
let numeroDos = 10;

let palabraUno = "Hola";
let palabraDos = "Que tal";

let suma = numeroUno + numeroDos;
let multi = numeroUno * numeroDos;
let divi = numeroUno / numeroDos;
let resta = numeroUno - numeroDos;
console.log(suma);
console.log(resta);
console.log(multi);
console.log(divi);

let sumaPalabras = palabraUno + palabraDos;
console.log(sumaPalabras);

numeroUno = 213;
numeroDos = 43;
let numeroTres = 123;
suma = numeroUno + numeroDos + numeroTres;
// console.log("La suma de "+numeroUno+" + "+numeroDos+" + "+numeroTres+" es: "+suma);
// console.log(`La suma de ${numeroUno} + ${numeroDos} + ${numeroTres} + es: \n${suma}`);
console.log('%c La suma de %d + %d + %d es: %d','background: #234FFD' ,numeroUno, numeroDos, numeroTres, suma);






