'use strict';

let objeto = {};
let formulario;

window.addEventListener('load', () => {

    let nombre = document.querySelector('#nombre');
    let apellido = document.querySelector('#apellido');
    let telefono = document.querySelector('#telefono');
    let boton = document.querySelector('#botonEnvio');
    formulario = document.querySelectorAll('.form-group input')



    boton.addEventListener('click', () => {
        //console.log('pulsado');
        //console.log(nombre.value);
        //console.log(apellido.value);
        //console.log(telefono.value);
        //console.log(objeto);
        enviarDatosForm();

    });

})

function enviarDatosForm() {
    //objeto = { nombre: nombre.value, apellido: apellido.value, telefono: telefono.value };
    //objeto['nombre'] = "asdasd";
    //objeto['apellido'] = "asdasd";
    //objeto['telefono'] = 123123;

    formulario.forEach(element => {
        objeto[element.id] = element.value;
    });
    console.log(objeto);
    console.log(typeof(objeto));

    objeto = JSON.stringify(objeto);

    console.log('despues de pasar a JSON string');
    console.log(objeto);
    console.log(typeof(objeto));


    console.log('despues de pasar a JSON object');
    objeto = objeto.json();
    console.log(objeto);
    console.log(typeof(objeto));







}