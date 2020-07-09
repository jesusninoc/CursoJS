'use strict';

let datos = [];
let datosEspania = {};


var data = google.visualization.arrayToDataTable([
    ['Element', 'Density', { role: 'style' }],
    ['Copper', 8.94, '#b87333'],            // RGB value
    ['Silver', 10.49, 'silver'],            // English color name
    ['Gold', 19.30, 'gold'],
    ['Platinum', 21.45, 'color: #e5e4e2' ], // CSS-style declaration
 ]);

// https://api.covid19api.com/all
window.addEventListener('load', () => {
    cargarDatos();
    //mostrarEspania();
});

function cargarDatos() {
    fetch('https://api.covid19api.com/country/spain/status/confirmed?from=2020-05-01T00:00:00Z&to=2020-05-30T00:00:00Z')
        .then((results) => results.json())
        .then((resolve) => {
            datos = resolve;
            mostrarEspania(datos);
        });
}

function mostrarEspania(datosParam) {
    //console.log(datos);
    datosParam.forEach(element => {
        //console.log(element.Country);
        if (element.Country === 'Spain') {
            //console.log(element.Date + " " + element.Confirmed);

            data.series.push(element.Cases);
            data.labels.push(element.datosEspania);
            //datosEspania[element.Date] = element.Confirmed;
        }
    });

    console.log(data.series);
    
    //console.log(data.series);
   // new Chartist.Line('.ct-chart', data);


}