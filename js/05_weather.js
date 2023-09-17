const API_KEY = "fa7e0b5465906b7cb0990d5764c31641";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather");
    const city = document.querySelector("#city");
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    city.innerText = data.name;
  })
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);