$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            auto: true ,
            autoControls : true,
            stopAutoOnClick: true,
            pager: true,
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            speed: 50,
          });
      

        }
    });