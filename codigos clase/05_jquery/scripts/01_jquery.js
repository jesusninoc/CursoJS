'use strict';

/*window.addEventListener('load', () => {
    console.log('carga correcta');
});*/

//document.querySelector('div').addEventListener();



$(document).ready(() => {
    /*console.log('jquery cargado correctamente');

    let inputTexto = document.querySelector('#texto');
    let inputNumero = document.querySelector('#numero');
    let inputBotones = document.querySelector('#botones');
    foreach()

    console.log(inputTexto);
    console.log(inputNumero);
    console.log(inputTexto.value);



    console.log('con jquery');

    let inputTextoJQ = $('#texto');
    let inputNumerosJQ = $('#numero');

    console.log(inputTextoJQ);
    console.log(inputNumerosJQ);*/

    let boton = document.querySelector('#boton');
    boton.addEventListener('click', () => {

        let texto = $('#texto');
        let numero = $('#numero');
        let valorTexto = texto.first().val();
        let valorNumeros = numero.first().val();

        // al pulsar el boton el resultado se ponga en el parrafo
        $('#resultado').text(`${valorTexto} ${valorNumeros}`);
    });

    // val() val('asdasdas') --> valor de un input (obtenerlo como ponerlo)
    // text() text('asdasdasd) --> valor del texto del nodo/os seleccionados

    // attr('value')

    let links = $('ul#webs a');
    //console.log(links.attr('href'));
    //links.attr('href', 'https://www.laliga.com');
    /*links.attr('href', function (index, attr) { 
         
    });*/
    /*$.each(links, (index, value) => {
        console.log(`${index} ${value}`);
    });*/

    //html('asdasd')

    //$('ul#webs').html($('ul#webs').html().concat('<li><a href="https://www.getafe.com">Getafe</a></li>'));
    $('ul#webs').append('<li><a href="https://www.getafe.com">Getafe</a></li>');

    // css('atributo','valor')

    //$('ul#webs').css('font-size', '30px').css('font-style', 'italic');
    $('ul#webs').addClass('parrafos');

    setTimeout(() => {
        $('ul#webs').removeClass('parrafos');
    }, 3000);













});