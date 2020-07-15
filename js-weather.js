const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY ="5f2a84c0efe337ed3aa921a02476140c";
const API_REQUEST = "api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}"



function getWeather (lat, long) {
 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
 .then(function(response) {
     return response.json();
 }).then(function (json) {
     console.log(json);
     const temp = json.main.temp;
     const place = json.name;
     weather.innerText = `${temp} @ ${place}`;
 })
}

function saveCoodrs (coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj))
}
// then은 데이터가 들어온 다음 호출 함수

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude : latitude,
        longitude : longitude
    };
    saveCoodrs(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("can't access")
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords () {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude)
    }
}



function init() {
    loadCoords();
}

init();
