function funcionaExportar() {
    console.log('ejecución de una funcion que es ha sido importada');
}

module.exports = {
    funcion: funcionaExportar,
    funcionFlecha: (param) => {
        console.log('ejecución de una funcion que es ha sido importada como función de flecha con el parámetros ' + param);
    },
    variable: false
};