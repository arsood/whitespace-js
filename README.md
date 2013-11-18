whitespace-js
=============

Whitespace JS is a front-end framework for creating rich functionality HTML 5 apps that look like the real thing.

About this project
-------------------

WhitespaceJS is a front end framework that is meant to make it easy for you to quickly prototype an HTML5 app in just a few minutes. The uses for this include things like mobile websites and PhoneGap applications. We've taken care of the HTML, CSS and some JS for you, and all you have to do is write in the markup.

Let's get started on using the framework. I'll try to do my best here so that if you actually read this you will be up and building immediately. I hate reading these docs too...

You can take a look at a live demo so you can follow along as you read: http://emboldenmedia.com/staging/whitespace/

Body tag
--------

The body tag is formatted by WhitespaceJS to have a margin-bottom of 45 pixels to account for a fixed navbar at the bottom of the screen. You can alter this property if you don't need this.

I also recommend placing the class .body-slight-gray on the body tag to make the other elements stand out well.

Icons
-----

The demos in this project use a library called Font Awesome for icons. This is a free library, and it is bundled with WhitespaceJS. You can choose to use it or not, it's not mandatory.

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

Tabs
----

Every app likes a good tabbed interface right? Here's how to use the tabs:

First, a tab holder to show the actual tabs:

		<div class="full-width-container">
			<div class="tab-holder">
				<ul class="tabs">
					<li class="active" data-tab="tab1">Description</li>
					<li data-tab="tab2">Details</li>
					<li data-tab="tab3">Amenities</li>
				</ul>
			</div>
		</div>

Each li in the tab holder has a data-tab attribute telling the JS where to find the tab content. These attrobutes link up to the ID's of the .tab-content classes shown below:

		<div class="padded-container">
			<div class="tab-content active" id="tab1">
				Tab 1
			</div>
			<div class="tab-content" id="tab2">
				Tab2
			</div>
			<div class="tab-content" id="tab3">
				Tab3
			</div>
		</div>

The class .active on the div sets the initial active tab on page load.

Wells
-----

Wells are just neat ways to contain and block off content. If you need a table-looking element, use these for your content. You can make any of the "cells" links as well. Here is a well example with a link included:

		<div class="well">
			<div class="well-title">
				This is my well
			</div>
			<div class="well-body">
				I'm pretty cool no?
			</div>
			<div class="well-title well-link" data-location="http://google.com">
				I am a link
			</div>
		</div>

The class .well-title uses bolded text to best display titles. .well-body is not bolded and is intended for general content within the wells. .well-link tells the framework that you will be taking the user to a link on click/touch of that div. With well links you need to specify a data-location attribute to direct the user properly.

Footer
------

Currently there is only one type of footer available. It is most closely modeled after the Facebook mobile footer. There will be more to come, but for now this is how it should be used:

		<footer class="footer footer-fixed footer-white">
			<div class="footer-element active">
				<div class="footer-element-icon">
					<i class="icon-camera"></i>
				</div>
				<div class="footer-element-title">
					My Photos
				</div>
			</div>
			<div class="footer-element">
				<div class="footer-element-icon">
					<i class="icon-twitter"></i>
				</div>
				<div class="footer-element-title">
					Tweets
				</div>
			</div>
			<div class="footer-element">
				<div class="footer-element-icon">
					<i class="icon-facebook"></i>
				</div>
				<div class="footer-element-title">
					Facebook
				</div>
			</div>
			<div class="footer-element">
				<div class="footer-element-icon">
					<i class="icon-adjust"></i>
				</div>
				<div class="footer-element-title">
					Awesome
				</div>
			</div>
			<div class="footer-element">
				<div class="footer-element-icon">
					<i class="icon-align-justify"></i>
				</div>
				<div class="footer-element-title">
					More
				</div>
			</div>
		</footer>

The .active class changes the element into a blue color. Currently this footer supports up to five elements.

Helper Classes
--------------

WhitespaceJS comes with a few helper classes that will just make your life easier while using the framework. Let's go through them:

		.txt-center

Center's content.

		.clearfix

Clears floated elements.

		.margin-top-10

Gives a margin-top of 10px. Useful for giving elements a little space from those above.

		.margin-icon-space

Pushes content that is inline with icons right 3px to give it a little room.

		.navbar-fixed-space

While using the fixed navbar this is helpful to clear content below.

		.pull-left
		.pull-right

Floats content left or right respectively.

		.img-responsive

If applied to an image, it will make that image responsive to screen size.
