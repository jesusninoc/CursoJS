'use strict'

/*let palabra = 'palabra De asdDrueba';
console.log(palabra);
console.log(palabra.toUpperCase());
console.log(palabra.toLowerCase());
console.log(palabra.toLocaleLowerCase());
console.log(palabra.charAt(0));
console.log(palabra.charCodeAt(0));
console.log(palabra.concat(' ejemplo'));
palabra = palabra.concat(' ejemplo');
console.log(palabra);*/

let palabra = "esto es un ejemplo de texto guardado en una variable de JS";
console.log(palabra.length);

// todos los codigos ASCII de todas las letras de la palabra
/*for (let index = 0; index < palabra.length; index++) {
    console.log(palabra.charCodeAt(index));
}*/

palabra.indexOf('a');
// quita espacios
palabra.trim();
palabra.substring(0, 3);

let correo = 'borja.martin@cesjuanpablosegundo.es';
// sacar el nombre y sacar el dominio en dos variables.
console.log(correo.indexOf('@'));


let nombre = correo.substring(0, correo.indexOf('@'));
let dominio = correo.substring(correo.indexOf('@') + 1, correo.length);
console.log(nombre);
console.log(dominio);

palabra = "Esto es una palabra que tienes unas cuantas letras";
let arraySplit = palabra.split(' ');
console.log(arraySplit.length);
arraySplit.forEach(element => {
    let arrayPalabra = element.split('');
    console.log(`La palabra ${element} tiene ${arrayPalabra.length} letras`);
});