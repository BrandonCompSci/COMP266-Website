// Code is wrapped in an immediately invoked function expression (IIFE) 
// to avoid polluting the global namespace with variables and functions:

// JavaScript / jQuery code for Country app using API from restcountries.com
(function() {
	// Gets data of inputted country
	async function getCountry(country) {
		// Get API data from restcountries.com
		const apiURL = "https://restcountries.com/v3.1/name/";
		const response = await fetch(apiURL + country + `?fullText=true`);
	
		// If input is a valid country name, get info
		// If input is invalid, display error message
		if (response.status === 404) {
			$(".error").css("display", "block");
			$(".country-info").css("display", "none");
		} else {
			$(".error").css("display", "none");
			$(".country-info").css("display", "block");
	
			// Get country data in the form of a JSON file
			const data = await response.json();

			getCountryFlag(data);

			$(".country-name").html(data[0].name.common);

			$(".capital").html(data[0].capital);

			$(".continent").html(data[0].continents);

			$(".population").html(data[0].population);

			$(".currency").html(data[0].currencies[Object.keys(data[0].currencies)].name);

			// If there are multiple languages, separate them by a comma
			$(".language").html(Object.values(data[0].languages).toString().split(",").join(", "));
		}
	}

	// Get flag of country using API from restcountries.com
	function getCountryFlag(data) {
		const image = document.getElementById("country-flag");
		const countryFlag = data[0].flags.png;
		image.src = countryFlag;
	}

	// Set Canada as default country
	getCountry("Canada");

	// Event listener for search button click
	$(".search-bar i").on("click", () => {
		getCountry($(".search-bar input").val());
	});

	// Event listener for "Enter" key press
	$(".search-bar input").on("keyup", (event) => {
		if (event.key === "Enter") {
			getCountry($(".search-bar input").val());
		}
	});
})();