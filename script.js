// Implement Dark Mode / Light Mode toggle with JavaScript
// Code sourced from: 
// w3schools.com. 2023. How To Toggle Between Dark and Light Mode. [online] Available at: 
// <https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp> [Accessed 24 April 2023].

function darkModeToggle() {
    // Declare constant variable 'body' and set it to 'body' element of document
    const body = document.body;

    // Declare constant variable 'toggleIcon' and select image element with ID 'toggle-icon'
    const toggleIcon = document.getElementById('toggle-icon');

    // When button is clicked, toggle 'light-mode' settings on/off
    body.classList.toggle("light-mode");

    // If 'light-mode' class is present on body element, display image of moon; 
    // if not present, display image of sun
    if (body.classList.contains('light-mode')) {
        toggleIcon.src = './images/moon.png';
    } else {
        toggleIcon.src = './images/sun.png';
    }
}

// Implement a Scroll To Top Button
// Code sourced from: 
// w3schools.com. 2023. How To Create a Scroll To Top Button. [online] Available at: 
// <https://www.w3schools.com/howto/howto_js_scroll_to_top.asp> [Accessed 25 April 2023].

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // Get the button:
    let mybutton = document.getElementById("go-top");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * Implement Adaptive Top Navigation Menu
 */

// Add event listener to hamburger icon
const hamburgerMenu = document.querySelector(".fa-bars");
hamburgerMenu.addEventListener("click", () => {
    adaptiveNav();
});

function adaptiveNav() {
    const navBar = document.getElementById("top-navbar");
    const toggleButton = document.getElementById("toggle-button");
    
    if (navBar.className === "navbar") {
        navBar.className += " adaptive";
        toggleButton.className += " adaptive";
    } else {
        navBar.className = "navbar";
        toggleButton.className = "theme-toggle";
    }
}

/**
 * Implement Form Validation
 */
// Get input field elements
const firstName = document.getElementById("user_first_name");
const lastName = document.getElementById("user_last_name");
const email = document.getElementById("user_email");

// Define regular expressions for validation
const nameRegex = /^[A-Za-z'-]+$/; // Only letters, apostrophes, and dashes
const emailRegex = /^\S+@\S+\.\S+$/; // Email format

// Get form element
const form = document.getElementById("contact-form");

// Function to validate input fields
function validateForm(submitForm) {
    // Validate form fields
    let firstNameValid = validateFirstName();
    let lastNameValid = validateLastName();
    let emailValid = validateEmail();
  
    // Prevent form from submitting if any fields are invalid
    if (!firstNameValid || !lastNameValid || !emailValid) {
        submitForm.preventDefault();
    }
}
  
// Validate first name
function validateFirstName() {
    let firstNameValid = false;
    const firstNameError = document.getElementById("first-name-error");

    if (firstName.value === "") {
        return 
    } else if (nameRegex.test(firstName.value)) {
        firstNameError.textContent = "";
        firstNameValid = true;
    } else {
        firstNameError.textContent = "Invalid first name";
    }

    return firstNameValid;
}

// Validate last name
function validateLastName() {
    let lastNameValid = false;
    const lastNameError = document.getElementById("last-name-error");

    if (lastName.value === "") {
        return 
    } else if (nameRegex.test(lastName.value)) {
        lastNameError.textContent = "";
        lastNameValid = true;
    } else {
        lastNameError.textContent = "Invalid last name";
    }

    return lastNameValid;
}

// Validate email
function validateEmail() {
    let emailValid = false;
    const emailError = document.getElementById("email-error");

    if (email.value === "") {
        return 
    } else if (emailRegex.test(email.value)) {
        emailError.textContent = "";
        emailValid = true;
    } else {
        emailError.textContent = "Invalid email";
    }

    return emailValid;
}

// Add event listener to form submit event
form.addEventListener("submit", validateForm);
  
// Add event listeners to input fields for real-time validation
firstName.addEventListener("blur", validateForm);
lastName.addEventListener("blur", validateForm);
email.addEventListener("blur", validateForm);


function main() {

}

main();