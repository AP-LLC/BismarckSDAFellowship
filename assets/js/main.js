(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '361px',   '736px'  ],
			xsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300,
			alignment: 'center'
		});

	// Scrolly
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height() - 5; }
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});
				
				
				
		// Screen Location Calc and Active Menu Button Switcher
	
})(jQuery);

$(document).ready(function() {
  var menuItems = $("#nav ul li a");

  // Function to update the active menu item
  function updateActiveMenuItem() {
    var scrollPosition = $(window).scrollTop() + 75;

    if (scrollPosition < $("#about").offset().top) {
      // Special case for the "Home" section
      menuItems.parent().removeClass("current");
      $("a[href='#header']").parent().addClass("current");
    } else {
      menuItems.each(function() {
        var href = $(this).attr("href");
        var targetSection = $(href);

        if (targetSection.length) {
          if (scrollPosition >= targetSection.offset().top && scrollPosition < targetSection.offset().top + targetSection.height()) {
            menuItems.parent().removeClass("current");
            $(this).parent().addClass("current");
          }
        }
      });
    }
  }

  // Update the active menu item when the page loads
  updateActiveMenuItem();

  $(window).scroll(function() {
    // Update the active menu item when scrolling
    updateActiveMenuItem();
  });
});