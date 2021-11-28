
const weatherIcon = document.getElementById('weather-icon');
const weatherItem = document.getElementById('weather');
const API_KEY = "4253ae16213a301c895a18c443e60b35"


function handleWeather(){
    weatherItem.classList.toggle('hidden');
}

weatherIcon.addEventListener('click', handleWeather);

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector('#weather span:first-child');
        const ciity = document.querySelector('#weather span:last-child');
        weather.innerText = `今日の天気は ${data.weather[0].main}です`;
        ciity.innerText = `今いる場所は ${data.name} です`;
    });
    
}
function onGeoError(){
    alert("can't find you")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
