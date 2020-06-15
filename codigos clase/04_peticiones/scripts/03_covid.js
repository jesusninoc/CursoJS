'use strict';

let datos = [];
let datosEspania = {};
let data = {
    labels: [],
    series: []
};

// https://api.covid19api.com/all
window.addEventListener('load', () => {
    cargarDatos();
    //mostrarEspania();
});

function cargarDatos() {
    fetch('https://api.covid19api.com/all')
        .then((results) => results.json())
        .then((resolve) => {
            datos = resolve;
            mostrarEspania(datos);
        });
}

function mostrarEspania(datosParam) {
    //console.log(datos);
    datosParam.forEach(element => {
        console.log(element.Country);
        /*if (element.Country === 'Spain') {
            //console.log(element.Date + " " + element.Confirmed);

            data.series.push(element.Confirmed);
            data.labels.push(element.Date);
            //datosEspania[element.Date] = element.Confirmed;
        }*/

    });

    //console.log(data.series);
    //new Chartist.Line('.ct-chart', data);


}