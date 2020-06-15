'use strict'

window.addEventListener('load', () => {

});

// promise
// ejecución acción (segundo plano)
// que se ejecute bien y si ha pasado el resultado
// si se ejecuta mal, que ha pasado 

// https://jsonplaceholder.typicode.com/posts

// promesa('datos').then(funcion_con_exito,funcion_fallo)

/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function() {

    }, function() {

    });*/

/*
let datos;
fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
        datos = response.json();
        console.log(datos);
    },
    (error) => { console.log(error) });*/

/*    
let promesa = new Promise((respuestaOk, respuestaFail) => {

    let numero1 = 6;
    let numero2 = 12;
    setTimeout(() => {
        if (numero1 + numero2 > 10) {
            return respuestaOk(numero1 + numero2);
        } else {
            return respuestaFail('resultado incorrecto');
        }
    }, 4000);
});

promesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
});
*/

let datos;
//https://jsonplaceholder.typicode.com/posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        datos = response.json();
        return datos;
    }).then((response) => {
        console.log(response);

    });