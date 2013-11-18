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
<pre>
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
</pre>
