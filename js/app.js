$(document).ready(function() {

    $('.aside__close').on('click', function() {
        $('aside').animate({
            left: '-200%'
        });
    });

    $('.open__aside').on('click', function() {
        $('aside').animate({
            left: '0'
        });
    });


    $('.nav__close').on('click', function() {
        $('nav').animate({
            top: '-100%'
        });
    });

    let isActiveNav = false;
    let navTop = 0;
    $('.open__nav').on('click', function() {
        if(isActiveNav) { navTop = -100; isActiveNav = false; }
        else { navTop = 0; isActiveNav = true; }

        $(this).toggleClass('change');
        
        $('nav').animate({
            top: `${navTop}%`
        });
    });

});