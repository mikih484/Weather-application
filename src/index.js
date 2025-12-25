function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature-value");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#weather-app-city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "e6893b7t5a0c3d944e8aabao5ca712f3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-form-input");

  searchCity(searchInputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
