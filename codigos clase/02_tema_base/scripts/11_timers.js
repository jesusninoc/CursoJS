'use strict'

// timers;

// timeOut --> retardo en ejecución
// interval --> ejecuta de forma recurrente

// setTimeout
// indico la funcion a ejecutar pero con un retardo de X ms

/*setTimeout(() => {
    console.log('Ejecución con retardo');  
}, 3000);

console.log('Script cargado');
console.log('Siguiente ejecución');

// setInterval
// indicar una función ejecutada cada X ms
setInterval(() => {
    console.log('ejecución en intervalos de 2 segundos');
}, 2000);

setInterval(()=>{console.log('ejecución en intervalos de 3 segundos');
},3000);*/

console.log('ejecucion normal en el hilo normal');


let fechaAhora = new Date();

setInterval(() => {
    fechaAhora = new Date()
    ponerFecha(fechaAhora)
}, 1000);

function ponerFecha(fecha) {
    console.log(`Son las ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}













