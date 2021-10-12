
$(document).ready(function () {

	$('main').toggleClass('hide');

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
		}, 85);
	}, 1500);

	// make content wait for name to be written
	let main_content_interval = setInterval(() => {
		$("main").toggleClass('hide');
		$("main").toggleClass('display');
		$("main").toggleClass('long-fade-in');
		clearInterval(main_content_interval);
	}, 2000)
});