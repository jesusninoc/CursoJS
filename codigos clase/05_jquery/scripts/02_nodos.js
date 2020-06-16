'use strict';

// trabajo con nodos

// createElement() appendChild() createNodeText()





$(document).ready(function() {

    // indica los parrafos
    //console.log($('ul#webs').contents());

    // añadir al final

    //let lista = $('ul#webs');
    //console.log(lista);
    //lista.append('<li>asdasdasd</li>');
    //lista.before('<li>asdasdasd</li>');
    //$('ul#webs').empty();
    //$('ul#webs').remove();
    //$('ul#webs').clone();

    //let nodoLI = document.createElement('li');
    //let nodoTE = document.createTextNode('Equipo nuevo');
    //nodoLI.appendChild(nodoTE);
    //let nodoA = document.createElement('a');
    //nodoA.href = "https://www.loquesea.com";
    //nodoA.innerText = "algo que mostrar";
    //nodoLI.appendChild(nodoA);
    //lista.append(nodoLI);
    //$('ul#webs').append('<li><a href="www.loquesea.com">Visitar</a></li>');


    // eventos
    //$('#boton').click(() => { console.log('pulsacion realizada'); })
    /*$('#boton').dblclick((event) => {
        console.log('pulsacion realizada');
        console.log(event);
    })*/
    //$('#texto').keydown((event) => { console.log(event) });

    /*$('#boton').on('click', { datoPasado: "algo que quiero pasar" }, (evento) => {
        console.log(evento.data.datoPasado);
    });*/
    //$('#boton').off();

    /* $('#boton').on({
        click: (event) => {
            console.log('pulsado click');
            console.log(event);

        },
        focus: () => {
            console.log('foco encima');
        },
        dblclick: dobleClick
    });

    $('#boton').off('focus');

    function dobleClick() {
        console.log('doble click realizado');

    } */

    let inputs = $('form input');
    let formulario = $('form#datos');
    console.log(inputs);

    let objeto = {};

    $('#boton').click(() => {


        // forma tradicional JS
        // saque por pantalla el json de los elementos del formulario
        //{nombre:"asdasd",apellido:"asdasd",direccion:"asdasd",telefono:213123}
        //$.each(inputs, function(indexInArray, valueOfElement) {
        //console.log(valueOfElement.id);
        //console.log(valueOfElement.value);
        //objeto[valueOfElement.id] = valueOfElement.value;
        //console.log($('#nombre'));
        //console.log(inputs[indexInArray].value);
        //});
        /*console.log($('#nombre').val());
        console.log($('#apellido').val());
        console.log($('#direccion').val());
        console.log($('#telefono').val());*/
        //console.log(objeto);


        objeto = $('form').serialize();
        //objeto = $('form').serializeArray();
        //console.log(JSON.stringify(objeto));
        console.log(objeto);



    });









});