$(document).ready(function($){

$(function() {
	$(".expandable").hover(function() {
		$(this).stop();
		$(this).animate({"width": "900px"});
		$(this).css("background-color: red");
	},

	function() {
		$(this).clearQueue();
		$(this).animate({"width": "300px"});
	})
})

$("#about").click(function() {
	$('html, body').animate({
    scrollTop: $(".about").offset().top - 20
	}, 500);
});

$("#work").click(function() {
	$('html, body').animate({
    scrollTop: $(".work").offset().top - 20
	}, 500);
});

$("#contact").click(function() {
	$('html, body').animate({
    scrollTop: $(".contact").offset().top - 20
	}, 500);
});

});