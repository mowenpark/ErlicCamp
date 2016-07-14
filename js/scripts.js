(function($) {
    "use strict";

    $('.page-scroll').bind('click', function(event) {
        var target = $( $(this).attr('href') );
        $('html, body').stop().animate({
            scrollTop: (target.offset().top - 60),
            duration: 2000,
            easing: 'easeInOutQuad'});
        event.preventDefault();
    });

})(jQuery);
