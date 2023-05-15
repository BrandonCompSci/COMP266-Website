(function($) {
    $.fn.adjustFontSize = function(options) {
        let settings = $.extend({
            increment: 2,
            max: 23,
            min: 14,
            buttonContainerClass: 'font-size-adjust',
            targetClass: 'text'
        }, options);
        
		return this.each(function() {
			let $targets = $('.' + settings.targetClass);
            
			let currentFontSize = $targets.css('font-size');
            
			let currentFontSizeValue = parseFloat(currentFontSize);
            
			let $buttonContainer = $('<div class="' + 
				settings.buttonContainerClass + 
				'">' +
                '<button class="increase">A+</button>' +
                '<button class="decrease">A-</button>' +
                '</div>').appendTo('body');
            
			$buttonContainer.css({
                position: 'fixed',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
            });

			$('.increase').css({
                font: 'bold 24px sans-serif'
            });

			$('.decrease').css({
				height: '42px',
				font: 'bold 18px sans-serif'
			});
            
			$buttonContainer.on('click', '.increase', function() {
                if (currentFontSizeValue < settings.max) {
                    currentFontSizeValue += settings.increment;
                    $targets.css('font-size', currentFontSizeValue);
                }
            });
            
			$buttonContainer.on('click', '.decrease', function() {
                if (currentFontSizeValue > settings.min) {
                    currentFontSizeValue -= settings.increment;
                    $targets.css('font-size', currentFontSizeValue);
                }
            });
        });
    };
}(jQuery));