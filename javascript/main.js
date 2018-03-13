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

      if ($(window).scrollTop() > 500) {
        $('h2').addClass('slideIn');
      }

    });
});

  function initMap() {
	
    var broadway = {
      info: '<strong>McDonalds on Broadway</strong><br>\
            160 Broadway <br> New York NY 10038 <br>\
            <a href="https://goo.gl/maps/PAeXvKk8moE2">Get Directions</a>',
      lat: 40.622425,
      long: -73.975572
    };
    
    var belmont = {
      info: '<strong>McDonalds on Belmont</strong><br>\
            6620 Bay Pkwy<br> Brooklyn, NY 11204<br>\
            <a href="https://goo.gl/maps/hnPayGKVyw62">Get Directions</a>',
      lat: 40.612997,
      long: -73.982865
    };
    
    var sheridan = {
      info: '<strong>Mcdonalds on Sheridan</strong><br>\r\
            880 Coney Island Ave<br> Brooklyn, NY 11218<br>\
            <a href="https://goo.gl/maps/GCWTNBLyYB32">Get Directions</a>',
      lat: 40.635801,
      long: -73.968134
    };
  
    var locations = [
        [broadway.info, broadway.lat, broadway.long, 0],
        [belmont.info, belmont.lat, belmont.long, 1],
        [sheridan.info, sheridan.lat, sheridan.long, 2],
      ];
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(40.635250, -73.970494),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
  
    var infowindow = new google.maps.InfoWindow({});
  
    var marker, i;
  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });
  
      google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }