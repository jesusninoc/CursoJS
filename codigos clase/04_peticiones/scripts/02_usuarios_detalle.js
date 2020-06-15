'use strict';

let usuario = [];
let id = localStorage.getItem('id');

// https://randomuser.me/api/?id=38429974
fetch(`https://randomuser.me/api/?id=${id}`)
    .then((results) => results.json(), (error) => {
        console.log('no se produce la carga');
    })
    .then((response) => {
        usuario = response.results[0];
        console.log(usuario);
        setDatos();
    });


function setDatos() {
    document.querySelector('#nombre').innerHTML = `${usuario.name.title} ${usuario.name.first} ${usuario.name.last}`;
}

window.addEventListener('beforeunload', () => {
    localStorage.clear();
})