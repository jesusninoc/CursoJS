function funcionLLamadaUno() {
    console.log('función llamada desde la ruta uno');
}

function funcionLLamadaDos() {
    console.log('función llamada desde la ruta des');
}

function funcionLLamadaTres() {
    console.log('función llamada desde la ruta tres');
}

function funcionLLamadaCuatro() {
    console.log('función llamada desde la ruta cuatro');
}

module.exports = { funcionUno: funcionLLamadaUno, funcionDos: funcionLLamadaDos, funcionTres: funcionLLamadaTres, funcionCuatro: funcionLLamadaCuatro }

exports.funcionLLamadaUno = funcionLLamadaUno;
exports.funcionLLamadaDos = funcionLLamadaDos;
exports.funcionLLamadaTres = funcionLLamadaTres;
exports.funcionLLamadaCuatro = funcionLLamadaCuatro;