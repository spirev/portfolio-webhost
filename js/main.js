
$(document).ready(function(){
	// let is_toggled = false;
	// if (is_toggled == false) {
	// 	$('#toggle').click(function(){
	// 		// hamburger animation (line to cross)
	// 		$(this).toggleClass('open');
	
	// 		// trigger fade-out animation for main content (not h1 and picture)
	// 		$("main").children().toggleClass('disapear');
	
	// 		// make h1 and pic fade out but not display none
	// 		$("h1").toggleClass('fade-out');
	// 		$("header img").toggleClass('fade-out');
			
			
	// 		setTimeout(function() {
	
	// 			// after fading out main content disapear for good
	// 			$("main").children().css("display", "none");
	
	// 			// menu animation get in (choice menu)
	// 			$(".menu").toggleClass("menu-on");
	// 		}, 290);
	// 	})
	// }
	// else {
	// 	$(".menu").toggleClass("menu-on");
	// 	$(".menu").toggleClass("disapear");
		
	// 	setTimeout(function() {
	// 		$(".menu").toggleClass("menu");
	// 		$("main").children().toggleClass("fade-in");
	// 		$("h1").toggleClass("fade-in");
	// 		$("header img").toggleClass("fade-in");
	// 	}, 290);
	// }

	$('#toggle').click(function() {
		
		// make hamburger menu go from line to crosses
		$(this).toggleClass('open');

		// this condition set wich content should disappear first
		if ($('#toggle').hasClass('open')) {
			// make main content fade-out
			$('.content').toggleClass('fade-out');
			$('.content').toggleClass('fade-in');
	
			// after main content fade-out animation
			setTimeout(function() {
				// make menu fade-in
				$('#menu').toggleClass('fade-in');
				$('#menu').toggleClass('menu-on');

				$('#menu').toggleClass('fade-out');
				$('#menu').toggleClass('menu-off');
			}, 600);
			
		}
		else {
			// make menu fade-out
			$('#menu').toggleClass('fade-in');
			$('#menu').toggleClass('fade-out');
			
			setTimeout(function() {
				// make menu content disappear
				$('#menu').toggleClass('menu-on');
				$('#menu').toggleClass('menu-off');
				// make main content appear and  disappear
				$('.content').toggleClass('fade-out');
				$('.content').toggleClass('fade-in');
			}, 600);
		}
	})


});