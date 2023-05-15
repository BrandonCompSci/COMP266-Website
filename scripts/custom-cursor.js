// jQuery plugin for custom cursor
// Source: https://dev.to/b4two/how-to-make-a-custom-cursor-with-css-and-jquery-5g3m
$(document).ready(function(){
	var cursor = $(".cursor");
	
	$(window).mousemove(function(e) {
		cursor.css({
			top: e.clientY - cursor.height() / 2,
			left: e.clientX - cursor.width() / 2
		});
	});

	$(window)
		.mouseleave(function() {
			cursor.css({
				opacity: "0"
			});
		})
		.mouseenter(function() {
			cursor.css({
				opacity: "1"
			});
		});

	$(".link")
		.mouseenter(function() {
			cursor.css({
				transform: "scale(3.2)"
			});
		})
		.mouseleave(function() {
			cursor.css({
				transform: "scale(1)"
			});
		});

	$(window)
		.mousedown(function() {
			cursor.css({
				transform: "scale(.2)"
			});
		})
		.mouseup(function() {
			cursor.css({
				transform: "scale(1)"
			});
		});
	});