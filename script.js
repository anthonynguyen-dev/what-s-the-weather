var apiKey = "9f2dbba4f257d4eb625124918b06faf4";
var citySearch = document.querySelector("#search-form");
var searchInput = document.querySelector("#search-input");
var windSpd = document.querySelectorAll(".wind-spd");
var temp = document.querySelectorAll(".temp");
var humidity = document.querySelectorAll(".humidity");
var weatherMain = document.querySelectorAll(".weather");
var nameCity = document.querySelector("#name-city");
var weatherJSON;
var date = document.querySelectorAll(".date");
const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var recentSearches = document.querySelector("#recent-searches");

citySearch.addEventListener("submit", function (event) {
  event.preventDefault();
  var cityName = searchInput.value.trim();
  getLocation(cityName);
  console.log(weatherJSON);
});

function getCurrentWeather(location) {
  console.log(location);
  var weatherURL = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`;
  fetch(weatherURL)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log("data returned is...");
      console.log(data);
      visualDisplay(data.list);
      weatherJSON = JSON.stringify(data);
      console.log(weatherJSON);
      //data.name;
    });
}

function populateRecentSearches() {
  localStorage.setItem();
  localStorage.setItem();
  localStorage.setItem();
  localStorage.setItem();
  localStorage.setItem();
}

function getLocation(city) {
  var locationApi = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

  fetch(locationApi)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      getCurrentWeather(data[0]);
    });
}

function displayJsonData(jsonData) {
  console.log("parsing json data");
  console.log("Displaying Temp.");
  console.log(jsonData.main.temp);
  console.log(jsonData.main.humidity);
  console.log(jsonData.wind.speed);
}

function getDate() {}

function visualDisplay(forecastDays) {
  console.log(forecastDays);

  for (var i = 0; i < 40; i += 8) {
    date.textContent = weatherMain[0].textContent =
      forecastDays[0].weather.main;
    weatherMain[1].textContent = forecastDays[8].weather.main;
    weatherMain[2].textContent = forecastDays[16].weather.main;
    weatherMain[3].textContent = forecastDays[24].weather.main;
    weatherMain[4].textContent = forecastDays[32].weather.main;

    temp[0].textContent = forecastDays[0].main.temp + " C";
    temp[1].textContent = forecastDays[8].main.temp + " C";
    temp[2].textContent = forecastDays[16].main.temp + " C";
    temp[3].textContent = forecastDays[24].main.temp + " C";
    temp[4].textContent = forecastDays[32].main.temp + " C";

    windSpd[0].textContent = forecastDays[0].wind.speed + " mph";
    windSpd[1].textContent = forecastDays[8].wind.speed + " mph";
    windSpd[2].textContent = forecastDays[16].wind.speed + " mph";
    windSpd[3].textContent = forecastDays[24].wind.speed + " mph";
    windSpd[4].textContent = forecastDays[32].wind.speed + " mph";

    humidity[0].textContent = forecastDays[0].main.humidity + " %";
    humidity[1].textContent = forecastDays[8].main.humidity + " %";
    humidity[2].textContent = forecastDays[16].main.humidity + " %";
    humidity[3].textContent = forecastDays[24].main.humidity + " %";
    humidity[4].textContent = forecastDays[32].main.humidity + " %";

    date[0].textContent = weekday[0];
    date[1].textContent = weekday[1];
    date[2].textContent = weekday[2];
    date[3].textContent = weekday[3];
    date[4].textContent = weekday[4];
  }
}
