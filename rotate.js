$(function() {

	$(document).on("mousedown", function(e) {
		e.preventDefault();
		$(document).on("mousemove", function(e) {
			// var $cubeXY = $(".cube").css("transform");
			$(".cube").css({
				"transform" : "rotateX(" + (-e.pageY) + "deg) rotateY(" + e.pageX + "deg)"
			});
		});
		$(document).on("mouseup", function(e) {
			e.preventDefault();
			$(document).off("mousemove");
		});
	});

	$(document).on("touchstart", function(e) {
		$(document).on("touchmove", function(e) {
			// var $cubeXY = $(".cube").css("transform");
			$(".cube").css({
				"transform" : "rotateX(" + (-e.targetTouches[0].pageY) + "deg) rotateY(" + e.targetTouches[0].pageX + "deg)"
			});
		});
	});

});