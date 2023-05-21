/**
 * Unit 6 adjust-font-size jQuery plugin
 * 
 * Displays two buttons that can be used to toggle font size
 */

// Wrap function in an Immediately-Invoked Function Expression (IIFE)
(function($) {
	// Define adjustFontSize function
    $.fn.adjustFontSize = function(options) {
        // Set default values for settings
		let settings = $.extend({
            increment: 2,
            max: 23,
            min: 14,
            buttonContainerClass: 'font-size-adjust',
            targetClass: 'text'
        }, options);
        
		// Iterate over each element in the jQuery object
		return this.each(function() {
			// Find all elements with the class specified in "targetClass" option
			let $targets = $('.' + settings.targetClass);
            
			// Get current font size of target elements
			let currentFontSize = $targets.css('font-size');
            
			// Convert font size value to a floating-point number
			let currentFontSizeValue = parseFloat(currentFontSize);
            
			// Create a new jQuery object representing a <div> element with buttons inside it
			// Append it to the <body> element of the DOM
			let $buttonContainer = $('<div class="' + 
				settings.buttonContainerClass + 
				'">' +
                '<button class="increase">A+</button>' +
                '<button class="decrease">A-</button>' +
                '</div>').appendTo('body');
            
			// Set the CSS properties for the button container element
			$buttonContainer.css({
                position: 'fixed',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
            });

			// Set the CSS properties for the "increase button"
			$('.increase').css({
                font: 'bold 24px sans-serif'
            });

			// Set the CSS properties for the "decrease button"
			$('.decrease').css({
				height: '42px',
				font: 'bold 18px sans-serif'
			});
            
			// Attach a click event handler to the "increase button"
			$buttonContainer.on('click', '.increase', function() {
				// If current font size is less than "max" setting:
				// Increase font size by "increment" value
				// Set font size of target elements to updated value
                if (currentFontSizeValue < settings.max) {
                    currentFontSizeValue += settings.increment;
                    $targets.css('font-size', currentFontSizeValue);
                }
            });
            
			// Attach a click event handler to the "decrease button"
			// If current font size is greater than "min" setting:
			// Decrease font size by "increment" value
			// Set font size of target elements to updated value
			$buttonContainer.on('click', '.decrease', function() {
                if (currentFontSizeValue > settings.min) {
                    currentFontSizeValue -= settings.increment;
                    $targets.css('font-size', currentFontSizeValue);
                }
            });
        });
    };
}(jQuery));