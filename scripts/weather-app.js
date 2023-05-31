// Code is wrapped in an immediately invoked function expression (IIFE) 
// to avoid polluting the global namespace with variables and functions:

// JavaScript / jQuery code for Weather app using API from openweathermap.org
(function() {
	// Checks the weather of inputted city
	async function checkWeather(city) {
		// Get API data from openweathermap.org
		const apiKey = "79ac1e469f7f49ddb27e3685d103c92c";
		const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
		const response = await fetch(apiURL + city + `&appid=${apiKey}`);
	
		// If input is a valid city name, get weather info
		// If input is invalid, display error message
		if (response.status === 404) {
			$(".error").css("display", "block");
			$(".weather").css("display", "none");
		} else {
			$(".error").css("display", "none");
			$(".weather").css("display", "block");
	
			// Get weather data in the form of a JSON file
			const data = await response.json();
	
			// Display weather info onto weather-card
			$(".city").html(data.name + ", " + data.sys.country);
			$(".temperature").html(Math.round(data.main.temp) + "&degC");
			$(".humidity").html(data.main.humidity + "%");
			$(".wind-speed").html(data.wind.speed + " km/h");
	
			// Display appropriate weather icon
			setWeatherIcon(data);
		}
	}

	// Use data from openweathermap API to set appropriate weather icon
	function setWeatherIcon(data) {
		const weatherIcon = $("#weather-icon");
	
		if (data.weather[0].main === "Thunderstorm") {
			weatherIcon.attr("class", "fa-solid fa-cloud-bolt");
		} else if (data.weather[0].main === "Drizzle") {
			weatherIcon.attr("class", "fa-solid fa-cloud-rain");
		} else if (data.weather[0].main === "Rain") {
			weatherIcon.attr("class", "fa-solid fa-cloud-showers-heavy");
		} else if (data.weather[0].main === "Snow") {
			weatherIcon.attr("class", "fa-solid fa-snowflake");
		} else if (data.weather[0].main === "Atmosphere") {
			weatherIcon.attr("class", "fa-solid fa-smog");
		} else if (data.weather[0].main === "Clear") {
			weatherIcon.attr("class", "fa-solid fa-sun");
		} else {
			weatherIcon.attr("class", "fa-solid fa-cloud");
		}
	}

	// Set Athabasca as default city
	checkWeather("Athabasca");

	// Event listener for search button click
	$(".search-bar i").on("click", () => {
		checkWeather($(".search-bar input").val());
	});

	// Event listener for "Enter" key press
	$(".search-bar input").on("keyup", (event) => {
		if (event.key === "Enter") {
			checkWeather($(".search-bar input").val());
		}
	});
})();