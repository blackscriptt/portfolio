$(document).ready(function() {

    // loading - [START]
    $('#loading .loading__first').animate({ opacity: '1' })
      .delay(7000)
      .animate({ opacity: '0' },
      function () {
        $('#loading').animate({ opacity: '1' })
          .delay(1500)
          .animate({ opacity: '0' }, function() { $(this).css({ display: 'none' }) });
      });
    // loading - [END^]

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
