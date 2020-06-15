'use strict';

let inputWeb;

window.addEventListener('load', () => {

    datosBOM();
    inputWeb = document.querySelector('#web');
    document.querySelector('#botonWeb').addEventListener('click', () => {
        let link = `https://www.${inputWeb.value}`;
        visitarWeb(link);
    });
    document.querySelector('#anterior').addEventListener('click', () => { history.back() });
    document.querySelector('#siguiente').addEventListener('click', () => { history.forward() });
    document.querySelector('#puntual').addEventListener('click', () => { history.go(-4) });
    document.querySelector('#ira').addEventListener('click', () => {
        //location.replace('http://developandsys.es/')
        location.assign('http://developandsys.es/');
    });

    let nodoA = document.createElement('a');
    nodoA.href = "https://www.marca.com/";
    console.log(nodoA.host);
    console.log(nodoA.protocol);
    console.log(nodoA.search);
    console.log(nodoA.origin);





});

function datosBOM() {
    console.log(history.length);
    console.log(history);
    console.log(navigator);
    //console.log(navigator.vibrate());
    console.log(screen);
    console.log(location);

    //location.
}

function visitarWeb(web) {
    location.assign(web);
}