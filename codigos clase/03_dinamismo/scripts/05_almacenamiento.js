'use strict'

// almacenamiento
// clave - valor


window.addEventListener('load', () => {

    window.addEventListener('storage', () => {
        console.log('storage cambiado');
    });

    guardarDatos();
    // getDatos();
    // adicionales();
    ejercicio();
});

// guardar
function guardarDatos() {
    localStorage.setItem('clave1', 'valor1');
    localStorage.setItem('clave2', 'valor2');
    localStorage.setItem('clave3', 'valor3');
    localStorage.setItem('clave4', false);
    localStorage.setItem('clave5', 123);
    localStorage.setItem('clave6', { nombre: 'asd', apellido: 'asdasd', telefono: 123 });
    localStorage.setItem('clave7', null);
    localStorage.setItem('clave8', JSON.stringify({ nombre: 'asd', apellido: 'asdasd', telefono: 123 }));
}

// recuperar
function getDatos() {
    let elemento1 = localStorage.getItem('clave1');
    let elemento4 = localStorage.getItem('clave4');
    let elemento5 = parseInt(localStorage.getItem('clave5'));
    let elemento6 = localStorage.getItem('clave6');
    let elemento7 = localStorage.getItem('clave7');
    let elemento8 = localStorage.getItem('clave8');
    elemento8 = elemento8.json();

    console.log(elemento1);
    console.log(elemento4);
    console.log(elemento5);
    console.log(elemento6);
    console.log(elemento7);
    console.log(elemento8);

    console.log(typeof(elemento1));
    console.log(typeof(elemento4));
    console.log(typeof(elemento5));
    console.log(typeof(elemento6));
    console.log(typeof(elemento7));
    console.log(typeof(elemento8));
}

// adicionales
function adicionales() {
    // borrar elementos
    localStorage.removeItem('clave1');
    localStorage.clear();
    console.log(localStorage.key(1));
    console.log(localStorage.length);

}

// sacar el valor de todos los elementos sin conocer el nombre de las claves
function ejercicio() {

    for (let index = 0; index < localStorage.length; index++) {
        //console.log(localStorage.key(index));
        console.log(localStorage.getItem(localStorage.key(index)));
    }

}