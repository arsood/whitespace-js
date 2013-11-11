$(".well-link").click(function() {
	var location = $(this).attr("data-location");
	window.location = location;
});