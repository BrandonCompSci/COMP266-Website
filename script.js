// Implement Dark Mode / Light Mode toggle with JavaScript
// Code sourced from: 
// w3schools.com. 2023. How To Toggle Between Dark and Light Mode. [online] Available at: 
// <https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp> [Accessed 24 April 2023].
function darkModeToggle() {
    // Declare constant variable 'body' and set it to 'body' element of document
    const body = document.body;

    // Declare contant variable 'toggleIcon' and select image element with ID 'toggle-icon'
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