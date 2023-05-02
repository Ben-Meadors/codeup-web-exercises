'use strict'

mapboxgl.accessToken = MAPBOX_KEY;

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true});

function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-135, 90])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: center, // starting position [lng, lat]
        zoom: 10, // starting zoom
    })
    map.scrollZoom.disable();

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

}


let weather = {
    "apiKey": OPEN_WEATHER_APPID,
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + OPEN_WEATHER_APPID).then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather at " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    },
    search: function(){
       this.fetchWeather(document.querySelector(".search").value);
    }
}

document.querySelector(".city-search").addEventListener("click", function (){
    weather.search();
})

document.querySelector(".search").addEventListener("keyup", function (event){
    if (event.key == "Enter"){
        weather.search()
    }
})



