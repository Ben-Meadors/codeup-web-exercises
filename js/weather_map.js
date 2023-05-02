'use strict'

mapboxgl.accessToken = MAPBOX_KEY;

// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});
//
// function successLocation(position){
//     console.log(position);
//     setupMap([position.coords.longitude, position.coords.latitude])
// }
//
// function errorLocation(){
//     setupMap([-135, 90])
// }

//created map
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: [-77, 38], // starting position [lng, lat]
        zoom: 10, // starting zoom
    })
    map.scrollZoom.disable(); //i dont like scroll zoom so i disabled it

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
        $.get("https://api.openweathermap.org/data/2.5/forecast", weatherOptions).done(function (data) {
            console.log(data);
            displayWeather(data)
    });
    }

    // big boi function to
    function displayWeather(data){
        $(".row").html("")
        $(".city").html(`${data.city.name}`)
        for (let i = 0; i <= 39; i = i + 8) {
            const name = data.city.name;
            console.log(name);
            console.log(data);
            const icon = data.list[i].weather[0];
            const description = data.list[i].weather[0];
            const temp = data.list[i].main;
            const humidity = data.list[i].main;
            const speed = data.list[i].wind;
            const date = data.list[i].dt_txt.slice(0,10);
            // document.querySelector(".city").innerText = "Weather at " + name;
            // document.querySelector((".date-" + i)).innerText = date;
            // document.querySelector((".icon-" + i)).src = "https://openweathermap.org/img/wn/" + icon + ".png";
            // document.querySelector((".description-" + i)).innerText = description;
            // document.querySelector((".temp-" + i)).innerText = temp + " °F";
            // document.querySelector((".humidity-" + i)).innerText = "Humidity: " + humidity + "%";
            // document.querySelector((".wind-" + i)).innerText = "Wind speed: " + speed + "km/h";
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
                <p class="wind card-text"> Wind Speed: ${speed.speed} </p>
            </div>
        </div>
    </div>
        `)
        }
        // document.querySelector(".weather").classList.remove("loading");

    }


document.querySelector(".search-button").addEventListener("click", function (e){
    e.preventDefault()
    var searchInput = document.querySelector(".search-bar").value
    geocode(searchInput, MAPBOX_KEY).then(function(result){
        console.log(result);
        map.setCenter(result);
            weatherOptions.lon = result[0];
            weatherOptions.lat = result[1];
            marker.setLngLat(result);
            fetchWeather();
    })
});

// document.querySelector(".search-bar").addEventListener("keyup", function (event){
//     if (event.key == "Enter"){
//         weather.search();
//     }
// });

// weather.fetchWeather("knoxville");

// function onDragEnd(){
//     const lnglat = marker.getLngLat();
//     updateCards(lngLat.lat, lngLat.lng)
// }
//
// marker.on('dragend', onDragEnd);
