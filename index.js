function showTemperaure(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `Current temperature ${response.data.main.temp}`;
}

function getCurrentTemperature(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apikey = "55ee7f54993429e7c2d9a48aa2b4d61b";
  let units = "metric";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`;
  axios.get(apiurl).then(showTemperaure);
}
navigator.geolocation.getCurrentPosition(getCurrentTemperature);

function searchCity(city) {
  let apiKey = "55ee7f54993429e7c2d9a48aa2b4d61b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperaure);
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let button = document.querySelector("button");
button.addEventListener("click", getCurrentTemperature);

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 77;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperarure");
  temperatureElement.innerHTML = 25;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
