'use strict';
/*
Escribe un programa en JavaScript que realice las siguientes tareas:
Mostrar por pantalla la expresión "Hola Mundo".
Mostrar por pantalla la expresión 5*5 como texto.
Mostrar por pantalla el resultado de la expresión 5*5.
*/

console.log('Hola Mundo');
console.log('5*5');
console.log(`${5*5}`);

/*
Realiza la siguientes tareas en el código js
Declara una variable constante con el nombre fijo y dale un valor booleano de true
Declara una variable con el nombre numero y dale un valor de texto de 1
Declara una variable con el nombre numeroCorrecto y asígnale el valor numérico de la variable del apartado anterior
Declara dos variables con el nombre suma y sumaOK. A la primera asígnale la suma de la variable numero + numero y a la segunda 
asígnale el valor de la variable numeroCorrecto + numeroCorrecto. Muestra el valor de ambas variables por pantalla
Muestra por pantalla el tipo de las dos variables anteriores
*/

const FIJO = true;
let numero = '1';
console.log(typeof(numero));
let numeroCorrecto = parseInt(numero);
console.log(typeof(numeroCorrecto));
let suma = numero + numero;
let sumaOk = numeroCorrecto + numeroCorrecto;
console.log(suma);
console.log(sumaOk);