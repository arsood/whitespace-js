//Send users to link on well-link click

$(".well-link").click(function() {
	var location = $(this).attr("data-location");
	window.location = location;
});

//Change look of footer on link click

$(".footer-element").click(function() {
	$(".footer-element").removeClass("active");
	$(this).addClass("active");
});

/*Change tabs*/

$(".tabs li").click(function() {
	$(".tabs li").each(function() {
		$(this).removeClass("active");
	});
	$(this).addClass("active");
	var idSelected = $(this).attr("data-tab");
	$(".tab-content").hide();
	$("#" + idSelected).fadeIn("fast");
});

/*Toggle sliding menus*/

$(".menu-toggle").click(function() {
	var idSelected = $(this).attr("data-menu");
	$("#" + idSelected).toggle("fast");
});