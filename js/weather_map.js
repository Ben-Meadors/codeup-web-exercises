'use strict'

mapboxgl.accessToken = MAPBOX_KEY;

//created map
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: [-77, 38], // starting position [lng, lat]
        zoom: 8, // starting zoom
    })
    map.scrollZoom.disable(); //i dont like scroll zoom so i disabled it
    //added zoom buttons
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    //creating marker
let marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-77, 38])
    .addTo(map);



    var weatherOptions = {
    lat: 38,
    lon: -77,
    appid: OPEN_WEATHER_APPID,
    units: "imperial"
    }
    fetchWeather(); //receives weather for location
    function fetchWeather(){
        console.log(weatherOptions)
        $.get("https://api.openweathermap.org/data/2.5/forecast", weatherOptions).done(function (data) {
            displayWeather(data)
    });
    }

    // function to add weather data to multiple cards
    function displayWeather(data){
        console.log('data: ', data);
        $(".row").html("")
        $(".city").html(`${data.city.name}`)
        for (let i = 0; i <= 39; i = i + 8) {
            const name = data.city.name;
            const icon = data.list[i].weather[0];
            const description = data.list[i].weather[0];
            const temp = data.list[i].main;
            const humidity = data.list[i].main;
            const speed = data.list[i].wind;
            const date = data.list[i].dt_txt.slice(0,10);
            $(".row").append(`
        <div class="col" id="card">
        <div class="card text-center">
            <div class="date card-header">
                ${date}
            </div>
            <div class="weather card-body">
                <p class="temp card-text"> ${temp.temp} °F </p>
                <img src="http://openweathermap.org/img/wn/${icon.icon}.png" alt="" class="icon" />
                <p class="description card-text"> ${description.description} </p>
                <p class="humidity card-text">Humidity: ${humidity.humidity}% </p>
                <p class="wind card-text"> Wind Speed: ${speed.speed} mph </p>
            </div>
        </div>
    </div>
        `)
        }
    }

// added event listener to change weather to location of entered value in search bar, also moves marker to new location
document.querySelector(".search-button").addEventListener("click", function (e){
    e.preventDefault()
    var searchInput = document.querySelector(".search-bar").value
    geocode(searchInput, MAPBOX_KEY).then(function(result){
        map.setCenter(result);
            weatherOptions.lon = result[0];
            weatherOptions.lat = result[1];
            marker.setLngLat(result);
            fetchWeather();
    })
});

    //working on the marker and movement to display weather
const lngLat = marker.getLngLat();
function onDragEnd(){
    const lngLat = marker.getLngLat();
    console.log(lngLat);
    // weatherOptions.lat = lngLat.lat;
    weatherOptions.lon = lngLat.lng;
    weatherOptions.lat = lngLat.lat;
    fetchWeather();
}
marker.on('dragend', onDragEnd);



