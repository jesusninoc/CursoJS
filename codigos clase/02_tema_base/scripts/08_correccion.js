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

/*let confirmacion;

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

console.log('terminado');*/

// ejercicio 7,8 y 11


/*

7 Crear un array vacío, luego generar 20 números al azar y guardarlos en un array.
8 Crear una función que salude pasando el nombre por parametro.
9 Pedir al usuario que introduzca por teclado dos números y mediante funciones mostrar 
el resultado de todas las operaciones en un cuadro de alerta
Modificar el ejercicio anterior para que una vez introducidos los números aparezca un 
cuadro de dialogo preguntando que si se quieren realizar las operaciones.
En caso de contestar que si aparecerán por consola y con un espacio de 2 segundos entre cada una los 
resultados de la suma, resta, multiplicación y división.
*/

let array = [];
for (let index = 0; index < 20; index++) {
    // let numero = Math.random() *30;
    array.push(parseInt(Math.random() * 30));
}

array.sort();
/*array.forEach(element => {
    console.log(element); 
});*/

function saludo(parametro) {
    alert(`buenas tardes ${parametro}`)
}

// saludo('Borja');

/*let numero1 = parseInt(prompt('intro numero 1'));
let numero2 = parseInt(prompt('intro numero 2'));

let funciones = [suma(numero1, numero2), resta(numero1, numero2), multi(numero1, numero2), division(numero1, numero2)];
let contador = 0;
if (!isNaN(numero1) && !isNaN(numero2)) {
    //alert(`La suma es: ${suma(numero1,numero2)}\nLa resta es: ${resta(numero1,numero2)}\nLa multi es: ${multi(numero1,numero2)}\nLa división es: ${division(numero1,numero2)}`)
    let confirmacion = confirm('seguro que quiere realizar las operaciones entre los numeros');
    if (confirmacion) {
        suma(numero1, numero2)
    }
} else {
    alert('hay algun fallo en la entrada')
}

// suma -->2--> resta -->2--> multi -->2-->div


function suma(op1, op2) {
    console.log(op1 + op2);
    setTimeout(() => {
        resta(numero1, numero2);
    }, 2000);
}
function resta(op1, op2) {
    console.log(op1 - op2);
    setTimeout(() => {
        multi(numero1, numero2);
    }, 2000);
}
function multi(op1, op2) {
    console.log(op1 * op2);
    setTimeout(() => {
        division(numero1, numero2)
    }, 2000);
}
function division(op1, op2) {
    console.log(op1 / op2);
}



/*
Crea un objeto JSON llamado equipo que tenga los atributos de nombre (string), fundacion (number), 
estadio (string), posicion (number), plantilla (array string). Dale valor a cada uno de ellos.
y muestra por consola todos los datos accediendo individualmente a cada uno de ellos

Modifica el ejercicio anterior, creando dos método en el objeto llamado mostrarPlantilla y mostrarDatos. 
El primero de ellos mostrará por consola el nombre de todos los jugadores, y el segundo mostrará en una 
sola linea nombre, año de fundación y nombre del estadio


Crea dos objetos cuales quiera con la siguiente estructura: { propiedadUno: '1', propiedadDos: 2, 
propiedadTres: 3, propiedadCuatro: false } y { propiedaduno: '1', propiedadDos: '2', propiedadtres: 
3, propiedadCuatro: false } . A continuación, comprueba qué nombres de propiedades son iguales entre 
los objetos, y de estos cuáles coincidentes en valor.
*/

let jsonEquipo = {
    nombre: 'Barcelona',
    anio: 1898,
    estadio: 'Camp Nou',
    posicion: 1,
    plantilla: ['Suarez', 'Messi', 'Iniesta'],
    plantillaJSON: [{nombre:'suarez',posicion:'delantero',media:90},{nombre:'messi',posicion:'delantero',media:99}],
    mostrarDatos: ()=>{console.log(`${jsonEquipo.nombre} ${jsonEquipo.anio} ${jsonEquipo.estadio}`);
    },
    mostrarPlantilla: ()=>{
        jsonEquipo.plantilla.forEach(element => {
            console.log(element);
        });
    }
};

/*console.log(jsonEquipo.nombre);
console.log(jsonEquipo.anio);
console.log(jsonEquipo.estadio);
console.log(jsonEquipo.posicion);
console.log(jsonEquipo.plantilla);*/
//jsonEquipo.mostrarDatos();
//jsonEquipo.mostrarPlantilla();
//console.log(this);
//onsole.log(jsonEquipo);

let jsonEquipoMetodos = {};

let jsonUno = {
    propiedadUno: '1',
    propiedadDos: 2,
    propiedadTres: 3,
    propiedadCuatro: false
}
let jsonDos = {
    propiedaduno: '1',
    propiedadDos: '2',
    propiedadtres: 3,
    propiedadCuatro: false
}

// salga los valores de las propiedades que se llaman igual


