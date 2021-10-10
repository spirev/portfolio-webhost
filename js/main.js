
$(document).ready(function () {

	$("main").toggleClass('hide');
	$("main").toggleClass('display');
	$("main").toggleClass('long-fade-in');

	// menu and content animation
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

	// name animation
	let name = $('h1');
	let plain_name = "VINCENT SPIRE";
	let loading_name = "";
	let char_iteration = 0;
	$("h1 span").text('\\');

	// make backslash flash
	setInterval(() => {
			$('h1 span').toggleClass('display');
			$('h1 span').toggleClass('hide');
	}, 600);

	// wait 1.5 seconde to display name
	setTimeout(() => {

		// display one lettre every 0.11 seconde
		let firstname_interval = setInterval(() => {
			loading_name += plain_name.charAt(char_iteration);
			name.text(loading_name + "\\");
			if (char_iteration >= plain_name.length) {
				name.text(name.text().substr(0, 13));
				name.append("<span>\\</span>");
				clearInterval(firstname_interval);
			}
			char_iteration++;
		}, 110);
	}, 1800);
});