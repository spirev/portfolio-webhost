$(document).ready(function () {

	// menu and content fading animation
	$('#toggle').click(function () {

		// make hamburger menu go from line to crosses
		$(this).toggleClass('open');

		// this condition set wich content should disappear first
		if ($('#toggle').hasClass('open')) {
			// make main content fade-out
			$('.content').toggleClass('fade-out');
			$('.content').toggleClass('fade-in');

			// after main content fade-out animation
			setTimeout(function () {
				// make menu fade-in
				$('#menu').toggleClass('fade-in');
				$('#menu').toggleClass('menu-on');

				$('#menu').toggleClass('fade-out');
				$('#menu').toggleClass('menu-off');
			}, 400);

		}
		else {
			// make menu fade-out
			$('#menu').toggleClass('fade-in');
			$('#menu').toggleClass('fade-out');

			setTimeout(function () {
				// make menu content disappear
				$('#menu').toggleClass('menu-on');
				$('#menu').toggleClass('menu-off');
				// make main content appear and  disappear
				$('.content').toggleClass('fade-out');
				$('.content').toggleClass('fade-in');
			}, 400);
		}
	})
});