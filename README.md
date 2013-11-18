whitespace-js
=============

Whitespace JS is a front-end framework for creating rich functionality HTML 5 apps that look like the real thing.

About this project
-------------------

WhitespaceJS is a front end framework that is meant to make it easy for you to quickly prototype an HTML5 app in just a few minutes. The uses for this include things like mobile websites and PhoneGap applications. We've taken care of the HTML, CSS and some JS for you, and all you have to do is write in the markup.

Let's get started on using the framework. I'll try to do my best here so that if you actually read this you will be up and building immediately. I hate reading these docs too...

Body tag
--------

The body tag is formatted by WhitespaceJS to have a margin-bottom of 45 pixels to account for a fixed navbar at the bottom of the screen. You can alter this property if you don't need this.

I also recommend placing the class .body-slight-gray on the body tag to make the other elements stand out well.

Navbars
-------

Currently there is only one navbar that is supported, but over time I will make a few more. It is a dark gray bar. It is implemented like so:

		<nav class="navbar navbar-black navbar-fixed-top">
			<div class="navbar-wrap">
				<div class="navbar-3-col">
					<a href="#" class="btn btn-gray-sub-1 menu-toggle" data-menu="myMenu">More</a>
				</div>
				<div class="navbar-3-col">
					<div class="navbar-feature">
						<a href="#"><i class="icon-align-center"></i></a>
						<a href="#"><i class="icon-anchor"></i></a>
						<a href="#"><i class="icon-zoom-out"></i></a>
					</div>
				</div>
				<div class="navbar-3-col">
					<a href="#" class="btn btn-blue-sub-1 menu-toggle" data-menu="myMenu">Contact</a>
				</div>
			</div>
		</nav>

The framework currently supports a three-column header that allows you to put buttons and icons on either side and in the middle.

Side menu
---------

Currently WhitespaceJS has one sidebar menu, but there will be many more to come. The current menu is positioned absolute to the body, and will slide in from the left side. Using the menu is simple. Here is an example markup:

Calling element:

		<a href="#" class="btn btn-blue-sub-1 menu-toggle" data-menu="myMenu">Contact</a>

Make sure to place the class .menu-toggle in the element and specify the ID of the menu itself in the data-menu attribute.

		<div id="myMenu" class="sliding-menu sliding-menu-left-1">
			<ul class="sliding-menu-nav">
				<li class="nav-search">
					<input type="text" placeholder="Search here" />
				</li>
				<li class="nav-header">
					This is my header
				</li>
				<li>
					<a href="#"><i class="icon-apple margin-icon-space"></i> My Dashboard</a>
				</li>
				<li class="active">
					<a href="#"><i class="icon-archive margin-icon-space"></i> My Profile</a>
				</li>
				<li>
					<a href="#"><i class="icon-apple margin-icon-space"></i> My Dashboard</a>
				</li>
				<li>
					<a href="#"><i class="icon-apple margin-icon-space"></i> My Dashboard</a>
				</li>
			</ul>
		</div>

You have to specify an id for your wrapping div that is called via the button or whatever other element you wish, as seen above.

Containers
----------

WhitespaceJS uses two types of containers - full-width and padded. They are used like so:

		<div class="full-width-container"></div>

and

		<div class="padded-container"></div>

Full-width allows you to take up the whole width of the screen, and padded is best for modular content, such as the wells we will discuss further down.

Slider
------

WhitespaceJS ships with the open-source SwipeJS plugin that works great with mobile devices. The CSS is already wrapped into WhitespaceJS, and all you have to do is include the JS file and call the slider in your markup. Here is an example:

Markup:

		<div class="full-width-container">
			<div id='slider' class='swipe'>
				<div class='swipe-wrap'>
					<div><img src="img/home-slider/slide1.jpg" /></div>
					<div><img src="img/home-slider/slide2.jpg" /></div>
					<div><img src="img/home-slider/slide3.jpg" /></div>
				</div>
			</div>
		</div>

JS:

		<script type="text/javascript" src="libraries/swipe-js/swipe.js"></script>
		<script type="text/javascript">
			window.mySwipe = Swipe(document.getElementById('slider'));
		</script>
