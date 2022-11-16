var apiKey = "9f2dbba4f257d4eb625124918b06faf4";
var citySearch = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
// function getAPI() {
//     api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// }

function getCurrentWeather(cityName) {
  var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(weatherURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
    });
  console.log(cityName);
}

citySearch.addEventListener("submit", function (event) {
  event.preventDefault();
  var cityName = searchInput.value.trim();
  getCurrentWeather(cityName);
});
