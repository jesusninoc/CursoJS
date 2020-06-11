'use strict'
// Clase nombre = new Clase(parametros);

let fecha = new Date();
let palabra = new String('palabra');
console.log(typeof (palabra));
let palabraa = 'palabra';
console.log(typeof (palabraa));

// {nombrePropiedad:valor,nombreMetodo:funcion,nombrePropiedad:valor}

let objetoJSON = { nombre: 'Borja', apellido: 'Martin', telefono: 9123123, disponibilidad: true };
console.log(objetoJSON);
console.log(objetoJSON.nombre);
objetoJSON.apellido = 'cambiado';
console.log(objetoJSON);

let objetoJSONMetodos = {
    nombre: 'Borja',
    apellido: 'Martin',
    telefono: 9123123,
    disponibilidad: true,
    mostrarDatos: (parametro) => {

        if (isNaN(parametro)) { alert('pasado como parametro un NaN') }
        else {
            console.log(`${objetoJSONMetodos.nombre} ${objetoJSONMetodos.apellido} ${objetoJSONMetodos.telefono} ${objetoJSONMetodos.disponibilidad}`);
        }
    }
}

//objetoJSONMetodos.mostrarDatos("asd");

let arrayObjetos = [{ nombre: 'Barcelona', posicion: 1, puntos: 23 },
{ nombre: 'Madrid', posicion: 2, puntos: 12 },
{ nombre: 'Atleti', posicion: 3, puntos: 10 }]

console.log(arrayObjetos);

arrayObjetos.forEach(element => {
   console.log(element.nombre);
});



