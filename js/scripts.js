(function($) {

    $('.page-scroll').bind('click', function(event) {

          var $ele = $(this);
          // debugger;
          $('html, body').stop().animate({
              scrollTop: ($($ele.attr('href')).offset().top - 60)
          }, 1000, 'swing');
          event.preventDefault();

    });

})(jQuery);
