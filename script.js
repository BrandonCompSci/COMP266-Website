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