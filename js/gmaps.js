google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(40.7128,-74.0059),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: true,
        panControl: false,
        streetViewControl: false,
        draggable : true,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"stylers":[{"hue":"#cccccc"},{"invert_lightness":true},{"saturation":-100},{"lightness":40},{"gamma":0.8}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}],
    };
    var mapElement = document.getElementById('google_map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [
['New York', 'undefined', 'undefined', 'undefined', 'undefined', 43.3564125, -80.2967399, 'https://mapbuildr.com/assets/img/markers/solid-pin-green.png']
    ];
    for (i = 0; i < locations.length; i++) {
  if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
  if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
  if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
       if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
       if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
link = '';     }

}
