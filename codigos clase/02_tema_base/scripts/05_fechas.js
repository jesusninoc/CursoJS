//'use strict'
// fechas

//let fecha = new Date();
//let fechaPropia = new Date(2010, 1, 1);
/*console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.getMonth() + 1);
console.log(fecha.getFullYear());*/

// variable con vuestro nombre
// Buenos dias XXX son las 19:10:123 de 10/06/2020
// Buenos tardes XXX son las 19:10:123 de 10/06/2020
// Buenos noches XXX son las 19:10:123 de 10/06/2020

/*let nombre = 'Borja';
let fecha = new Date();
let fechaFormateada = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getMilliseconds()} de ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getUTCFullYear()}`;
let momento;

if (fecha.getUTCHours() > 06 && fecha.getUTCHours() < 12) {
    momento = "Buenos días";
} else if (fecha.getUTCHours() >= 12 && fecha.getUTCHours() < 20) {
    momento = "Buenas tardes";
} else {
    momento = "Buenas noches";
}

console.log(`${momento} ${nombre} ${fechaFormateada}`);*/

/*let fecha = new Date();
let fechaFormateada = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getMilliseconds()} de ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getUTCFullYear()}`;
console.log(fechaFormateada);
console.log(fecha.getMonth());
//fecha.setMonth = fecha.setUTCMonth(-1);
console.log(fecha.setUTCMonth(fecha.getDate()-5));
console.log(fecha.getUTCMonth());*/

let fecha = new Date();
console.log(fecha.toString());
console.log(fecha.toUTCString());
console.log(fecha.toISOString());