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

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
