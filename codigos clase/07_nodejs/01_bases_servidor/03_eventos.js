const { EventEmitter } = require("events");
let gestorEventos = new EventEmitter();
gestorEventos.on('identificador', realizarAlgo);

function realizarAlgo(paramentro) {
    console.log(`ejecución de la función realizada desde la plataforma ${paramentro}`);
}

gestorEventos.emit('identificador', process.platform);