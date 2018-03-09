$( document ).ready(function() {
    // dropdown for top events
    $('.dropdown-toggle').dropdown()

    // scroll sticky nav
    $(window).scroll(function () {
    
      if ($(window).scrollTop() > 100) {
        $('.nav').addClass('sticky-top');
      }
      if ($(window).scrollTop() < 101) {
        $('.nav').removeClass('sticky-top');
      }
    });
});