'use strict'
/*
1. Crea un programa que pida por prompt al usuario 4 variables que representen los lados de un cuadrado. 
Una vez introducido todas se mostrar una alerta por pantalla indicando si es correcto el valor de los lados introducidos.
En caso de ser correcto que también aparezca el área de un cuadrado (lado * lado)
*/

/* let lado1 = prompt('intro lado 1');
let lado2 = prompt('intro lado 2');
let lado3 = prompt('intro lado 3');
let lado4 = prompt('intro lado 4');

if (parseInt(lado1) == parseInt(lado2) && parseInt(lado1) == parseInt(lado3) && parseInt(lado1) == parseInt(lado4)) {
    let area = Math.pow(parseInt(lado1), 2);
    alert(`es un cuadrado y su area es ${area}`);
} else {
    alert('no es un cuadrado');
}*/

/*let numero = parseInt(prompt('Introduce número'));

console.log(numero);

if (isNaN(numero)) {
    alert('No has metido un número');

} else {
    if (numero % 2 == 0) {
        alert('El número es par');
    } else {
        alert('El número es impar');
    }
}*/

/*

let nombre = prompt('intro nombre');
let letra = prompt('intro letra');
let contador = 0;

if (nombre.indexOf(letra) > -1) {
    let letras = nombre.split('');
    for (let index = 0; index < letras.length; index++) {
        if (letras[index] == letra) {
            contador++;
        }
    }

    for (let index = 0; index < nombre.length; index++) {
        if (nombre.charAt(index) == letra) {
            contador++;
        }
    }

    alert(`la letra existe y aparece ${contador} veces`);


} else {
    alert(`la letra no existe `);
}*/

/*let fechaActual = new Date();
let fechaEnero = new Date(2020, 0, 1);
console.log(fechaActual);
console.log(fechaEnero);

let diferencia = fechaActual.getTime() - fechaEnero.getTime();
console.log(diferencia / (1000 * 60 * 60 * 24));

let numero = prompt('intro numero');
if (numero >= 0) {
    for (let index = numero; index >= numero; index--) {
        alert(`La cuenta está en ${index}`);
    }

} else {
    alert('numero menor que 0, no valido')
}*/

/*
Pedir dos números por teclado y mostrar en una alerta todos las operaciones posibles para dichos 
números (suma, resta, multiplicación y división). Adicionalmente el programa hará lo siguiente:

si se introduce números menores que 0 o letras que salte una alerta indicando el error y el programa parará
tras mostrar todas las operaciones se pedirá confirmación al usuario para que indique si quiere continuar 
realizando operaciones: en caso positivo el programa volverá a empezar. En caso negativo el programa parará
si se detecta que alguna de las operaciones es negativa el programa parará tras realizar todas las operaciones 
de los números
*/

let confirmacion;

do {

    let numero1 = parseInt(prompt('into primer número'));
    let numero2 = parseInt(prompt('into segundo número'));

    if (isNaN(numero1) || isNaN(numero2) || numero2 < 0 || numero1 < 0) {
        alert('datos incorrectos');
        confirmacion = false;
    } else {

        let suma = numero2 + numero1;
        let resta = numero1 - numero2;
        let mult = numero1 * numero2;
        let div = numero1 / numero2;
        alert(`Los datos de las operaciones son \nSuma: ${suma} \nResta ${resta} \nMultiplicación: ${mult}\nDivisión: ${div}`);
        confirmacion = confirm('Quieres volver a realizar operaciones');
    }
} while (confirmacion);

console.log('terminado');