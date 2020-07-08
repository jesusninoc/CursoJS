function llamadaRuta1() {
    //console.log('llamada a la función desde la primera ruta');
    return "Llamada 1";

}

function llamadaRuta2() {
    //console.log('llamada a la función desde la segunda ruta');
    return "Llamada 2";

}

function llamadaRuta3() {
    //console.log('llamada a la función desde la tercera ruta');
    return "Llamada 3";

}

function llamadaRuta4() {
    //console.log('llamada a la función desde la cuarta ruta');
    return "Llamada 4";

}

exports.llamadaRuta1 = llamadaRuta1;
exports.llamadaRuta2 = llamadaRuta2;
exports.llamadaRuta3 = llamadaRuta3;
exports.llamadaRuta4 = llamadaRuta4;
//module.exports = { ruta1: llamadaRuta1, ruta2: llamadaRuta2, ruta3: llamadaRuta3, ruta4: llamadaRuta4 };