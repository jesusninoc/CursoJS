// DOM 
// nodos
// elementos --> a, div, button, p, h1
// atributos --> href, class, id, style
// texto --> "asdasdasd" 
// página --> document
// comentario --> //

console.log(document.getElementById('personalizado'));
let parrafoElemento = document.getElementById('personalizado');
//console.log(parrafoElemento.innerHTML);
//parrafoElemento.innerHTML = "Cambiado desde JS";
setTimeout(() => {
    parrafoElemento.className = 'personalizado';
}, 5000);

let lista = document.getElementById('lista_enlaces');
lista.innerHTML = lista.innerHTML.concat(' <li><a>Elemento nuevo</a></li>');

let cursivas = document.getElementsByClassName('cursiva');
console.log(cursivas);

let listas = document.getElementsByTagName('ul');
console.log(listas);

/*for (let index = 0; index < listas.length; index++) {
    console.log(listas[index]);
    console.log(listas[index].children);
    for (let index1 = 0; index1 < listas[index].children.length; index1++) {
        listas[index].children[index1].innerHTML = "minodo";
    }
    //console.log(listas[index].innerText);
    /*console.log('lista ' + index);
    console.log(listas[index].children);
    console.log(listas[index].innerHTML);
    console.log(listas[index]);
    let hijos = listas[index].children;
    for (let index2 = 0; index2 < hijos.length; index2++) {
        console.log(hijos[index2].innerHTML);
    }
}*/

//document.getElementsByTagName('ul').getElementsByClassName('cursiva').getElementById('personalizada');
console.log('con query');

let listaPersonalizada = document.querySelectorAll('ul.cursiva#conocimientos');
let listaConocimiento = document.querySelectorAll('div#contenido ul[class]');
let parrafo = document.querySelector('div#contenido .cursiva');
parrafo.innerHTML = 'asdasd';

console.log(listaPersonalizada);
console.log(listaConocimiento);


let parrafoHora = document.querySelector('#hora');

setInterval(() => {
    parrafoHora.innerHTML = 'Hora: ' + cambiarFecha(new Date());
}, 1000);

// cambarFecha(10:18:56) --> 10:18:56
// cambarFecha(10:18:57) --> 10:18:57
// cambarFecha(10:18:58) --> 10:18:58
// cambarFecha(10:18:59) --> 10:18:59

function cambiarFecha(fecha) {
    return `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
}

let listaConocimientoQuery = document.querySelector('div#contenido ul#conocimientos');
console.log(listaConocimientoQuery);

/*setInterval(() => {
    let nodoLi = document.createElement('li');
    let nodoTexto = document.createTextNode('ejemplo');
    nodoLi.appendChild(nodoTexto);
    listaConocimientoQuery.appendChild(nodoLi);
}, 1000);*/

let nodoLi = document.createElement('li');
let nodoa = document.createElement('a');
nodoa.href = "https://www.marca.com";
nodoa.innerText = "pulsa para visitar";
nodoLi.appendChild(nodoa);


//let nodoTexto = document.createTextNode('ejemplo');
//nodoLi.appendChild(nodoTexto);
listaConocimientoQuery.appendChild(nodoLi);