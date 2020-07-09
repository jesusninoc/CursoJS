function manejarRuta(path, eventos) {
    console.log('Servidor web con una nueva ruta cargada: ' + path);
    //console.log(eventos);
    //eventos[path]();
    if (typeof eventos[path]() === 'function') {
        eventos[path]();
    } else {
        console.log('Llamada incorrecta, no se trata de una función');

    }

}

module.exports = { funcionRuta: manejarRuta };