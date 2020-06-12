'use strict';

let editNombre = document.querySelector('#nombre');
let editApellido = document.querySelector('#apellido');
let editTelefono = document.querySelector('#telefono');
let lista = document.querySelector('#personas');
let boton = document.querySelector('#botonEnviar');
let inputs = document.querySelectorAll('form#formulario input');
let inputsRan = document.querySelectorAll('input[type=range]');
let inputsR = document.querySelector('#rojo');
let inputsG = document.querySelector('#verde');
let inputsB = document.querySelector('#azul');




boton.addEventListener('click', botonPulsado);
//boton.removeEventListener('click', botonPulsado);
boton.addEventListener('dblclick', () => { console.log('boton pulsado doble'); });
boton.addEventListener('focus', () => { console.log('seleccionado'); });
boton.addEventListener('mouseover', () => { console.log('raton encima'); });
inputs.forEach(element => {
    element.addEventListener('keydown', (event) => {
        console.log('tecla presionada ');
        console.log(event.key);
    });
});
inputsRan.forEach(element => {
    element.addEventListener('change', () => {
        console.log(`rgb(${inputsR.value},${inputsG.value},${inputsB.value}`);
        document.querySelector('#cambioColor').style.background = `rgb(${inputsR.value},${inputsG.value},${inputsB.value})`;
    })
});



function botonPulsado() {

    //console.log(editNombre.value.length);
    if (editNombre.value.length < 1 || editTelefono.value.length < 1 || editApellido.value.length < 1) {
        alert('Faltan datos');
    } else {

        let nodoLi = document.createElement('li');
        let nodoTe = document.createTextNode(`${editNombre.value} ${editApellido.value} ${editTelefono.value}`);
        nodoLi.appendChild(nodoTe);
        nodoLi.className = 'list-group-item';
        lista.appendChild(nodoLi);

        vaciar();
    }
}

function vaciar() {
    editNombre.value = "";
    editTelefono.value = "";
    editApellido.value = "";
}

let operando1 = document.querySelector('#operando1');
let operando2 = document.querySelector('#operando2');
let botonCalcular = document.querySelector('#botonCalcular');
botonCalcular.addEventListener('click', () => {
    let operacion = document.querySelector('input[name="grupo"]:checked').value;
    //console.log(operando1.value);
    //console.log(typeof(operando1));

    operar(parseInt(operando1.value), parseInt(operando2.value), parseInt(operacion));
});

function operar(op1, op2, op) {
    let resultadoTexto;
    switch (op) {
        case 1:
            resultadoTexto = `${op1} + ${op2} = ${op1+op2}`;
            break;
        case 2:
            resultadoTexto = `${op1} - ${op2} = ${op1-op2}`;
            break;
        case 3:
            resultadoTexto = `${op1} * ${op2} = ${op1*op2}`;
            break;
        case 4:
            resultadoTexto = `${op1} / ${op2} = ${op1/op2}`;
            break;
    }
    //console.log(resultadoTexto);

    let nodoLi = document.createElement('li');
    let nodoTe = document.createTextNode(`${resultadoTexto}`);
    nodoLi.appendChild(nodoTe);
    document.querySelector('#operacionesLista').appendChild(nodoLi);
}

let tweet = document.querySelector('#tweet');
tweet.addEventListener('keydown', () => {
    //console.log(tweet.value.length);
    document.querySelector('#longitudTw').innerHTML = `${tweet.value.length+1}/255`;
});

document.querySelector('#botonTweet').addEventListener('click', () => {
    let confirmacion = confirm('estas seguro que quiere mandar el tweet');

    if (confirmacion) {
        let nodoLi = document.createElement('li');
        let nodoTe = document.createTextNode(tweet.value);
        nodoLi.appendChild(nodoTe);
        document.querySelector('#listaTweets').appendChild(nodoLi);
    } else {
        alert('operacion cancelada');
    }
});