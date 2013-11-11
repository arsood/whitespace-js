//Send users to link on well-link click

$(".well-link").click(function() {
	var location = $(this).attr("data-location");
	window.location = location;
});

//Change look of footer on link click

$(".footer-element").click(function() {
	$(".footer-element").each(function() {
		$(".footer-element").removeClass("active");
	});
	$(this).addClass("active");
});