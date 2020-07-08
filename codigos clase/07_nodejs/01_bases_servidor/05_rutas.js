function manejarRuta(ruta, manejador) {
    console.log('función encargada de manejar las rutas: ' + ruta);
    //manejador[ruta]();

    if (typeof manejador[ruta] === 'function') {
        return manejador[ruta]();
    } else {
        console.log("No se encontro manipulador para " + ruta);
        return "404 No Encontrado";
    }
}

module.exports = {
    funcion: manejarRuta
};