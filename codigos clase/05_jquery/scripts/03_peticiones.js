'use strict';

// https://randomuser.me/api/?results=50

$(document).ready(function() {

    //$('#resultadoPeticion').load("https://randomuser.me/api/?results=50", "data", function(response, status, request) {});

    //fetch('https://randomuser.me/api/?results=50').then((respuesta)=>respuesta.json()).then();

    let urlApi = 'https://randomuser.me/api/';

    /*$.get(urlApi, { results: 50, gender: 'female' }, (response) => {
        console.log(response.results);
    });*/

    //console.log('peticiones chicos');

    /*$.get(urlApi, { results: 100, gender: 'male' }, (response) => {
        console.log(response.results);
    });*/

    /*$.get(urlApi, { email: 'ln.khrymy@example.com' }, (response) => {
        console.log(response.results);
    });*/

    $('#botonBusqueda').click(() => {
        //console.log($('form input:checked'));
        let genero = $('form input:checked').val();
        let email = $('#email').val();
        let numero = $('#numero').val();
        let datos = {};


        //console.log($('#email'));

        if (email.length > 0) {
            datos['email'] = email;
            datos['gender'] = genero;
        } else {
            datos['results'] = numero;
            datos['gender'] = genero;
        }
        $.get(urlApi, datos, (resultado) => {
            console.log(resultado);
        });
    });
});