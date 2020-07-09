'use strict';

navigator.geolocation.getCurrentPosition((posicion) => {
    console.log(posicion.coords.latitude);
    console.log(posicion.coords.longitude);
});

let pintarMapa = new GMaps({ el: "#mapa", lat: 0, lng: 0 });

GMaps.geolocate({
    success: function(position) {
        latitude = position.coords.latitude;
        longitud = position.coords.longitude;
        pintarMapa.setCenter(latitude, longitud);
    },
    error: function(params) {
        console.log('error en la geolocalización');

    },
    not_supported: function(params) {
        console.log('característica no soportada');

    }

});