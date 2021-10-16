$(document).ready(function () {

    let window_width = window.innerWidth;
    
    console.log(window_width);

    if (window_width > 425) {
        $('#projects img:not(.caroussel)').toggleClass('menu-off');
    }
    else {
        $('.caroussel').toggleClass('menu-off');
    }

});