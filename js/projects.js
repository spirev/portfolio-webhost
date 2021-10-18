$(document).ready(function () {

    let window_width = window.innerWidth;
    let img_element = $('.caroussel');
    let caroussel_array = [
        ['images/Ready-A-L1.png', 'images/Ready-A-L2.png', 'images/Ready-A-L3.png', 'images/Ready-A-L4.png'],
        ['images/axono_L1.png', 'images/axono_L2.png'],
        ['images/symfony-learnning-L1.png', 'images/symfony-learnning-L2.png', 'images/symfony-learnning-L3.png'],
    ];
    let caroussel_index = [
        [0, 3],
        [0, 1],
        [0, 2]
    ];
    
    // if device screen is widther than 425px (mobile) then display only one picture and change each every said time
    if (window_width > 425) {
        // display only one picture by project
        $('#projects img:not(.caroussel)').toggleClass('menu-off');
      
        // fade-out fade-in animation of projects pictures
        setInterval(() => {
            img_element.toggleClass('project-fade');
            // change picture on every timer length
            setTimeout(() => {
                caroussel_index.forEach(e => {
                    if (e[0] + 1 > e[1]) {
                        e[0] = 0;
                    }
                    else {
                        e[0] = e[0] + 1;
                    }
                });
                img_element.each(e => {
                   img_element[e].src = caroussel_array[e][caroussel_index[e][0]];
                });
            }, 350);
            
            // delete 'project-fade' class from projects pictures to be able to apply it again on next iteration
            setTimeout(() => {
                img_element.toggleClass('project-fade');
            }, 700)
        }, 5000);
      

    }
    else {
        $('.caroussel').toggleClass('menu-off');
    }

});