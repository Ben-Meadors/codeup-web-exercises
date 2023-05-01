'use strict'

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q:     "Fredericksburg, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
});

mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
    center: [-77.4605, 38.3032], // starting position [lng, lat]
    zoom: 10, // starting zoom
});
