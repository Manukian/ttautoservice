$(document).ready(function() {
    $('#intro').height($(window).height());
    $(document).resize(function(){
        $('#intro').height($(window).height());
    });
    
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
              scrollTop: $(this).offset().top
            }, 1000);
        });
    }
    
    $('.arrow').click(function(){
        $('#what_we_do').scrollView();
    });
    
    setTimeout(function() {
        $('.we_work').addClass('transform_clear');
        $('.phone').addClass('transform_clear');
    }, 600);
    setTimeout(function() {
        $('.header_big').addClass('transform_clear');
    }, 900);
    setTimeout(function() {
        $('.header_big_label').addClass('transform_clear');
    }, 1200);
    setTimeout(function() {
        $('.lines').css('opacity','1');
        $('.arrow').css('opacity','1');
    }, 1700);
    
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFnZ2kyNSIsImEiOiJjaXR3ajQ4b28wMDczMnptbG9lZHB5NDFsIn0.iQyPwQv4pF20jA1wwsxbkw';
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/vaggi25/citwl2c6v00712iolz4bb9bxo', //stylesheet location
        center: [18.756,42.381], // starting position
        zoom: 15.1 // starting zoom
    });
    

    map.on('load', function () {
        map.addSource("points", {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [18.756,42.381]
                    },
                    "properties": {
                        "title": "Tri Tona",
                        "icon": "car"
                    }
                }]
            }
        });

        map.addLayer({
            "id": "points",
            "type": "symbol",
            "source": "points",
            "layout": {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
            }
        });
    });
    
});