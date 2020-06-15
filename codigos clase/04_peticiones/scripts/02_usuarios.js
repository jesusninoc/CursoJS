'use strict';

let usuarios = [];
let lista;

window.addEventListener('load', () => {

    fetch('https://randomuser.me/api/?results=500').
    then((response) =>
        usuarios = response.json()
    ).then((datos) => {
        //console.log(datos.results);
        //console.log(usuarios);
        usuarios = datos.results;
    }).then(() => listarElementos(usuarios));

    //then(() => soloChicos(usuarios));
});

function listarElementos(coleccion) {
    console.log(coleccion);
    coleccion.forEach(element => {

        if (element.gender === 'male') {
            lista = document.querySelector('div#chicos ul');
        } else if (element.gender === 'female') {
            lista = document.querySelector('div#chicas ul');
        }

        let nodoLi = document.createElement('li');
        nodoLi.style.margin = '10px';
        let nodoTexto = document.createTextNode(`${element.name.title} ${element.name.first} ${element.name.last} \t`);
        let nodoBoton = document.createElement('button');
        nodoBoton.innerText = 'Ver detalles';
        nodoLi.appendChild(nodoTexto);
        nodoLi.appendChild(nodoBoton);
        lista.appendChild(nodoLi);

        nodoBoton.addEventListener('click', () => {
            // console.log(element.id.value);
            // id del usuario
            // mostrarFoto(element.picture.large);
            verDetalle(element.id.value);
        });
    });
}

function verDetalle(id) {
    localStorage.setItem('id', id);
    location.assign('./02_usuarios_detalle.html');
}

function mostrarFoto(url) {
    console.log(url);
    //document.querySelector('#imagen').src = url;
    //let imagen = document.querySelector('#imagen');
    //imagen.src = url;
}

function soloChicos(coleccion) {
    coleccion.forEach(element => {
        //console.log(element);
        if (element.gender === 'female') {
            console.log(element);
        }
    });
}