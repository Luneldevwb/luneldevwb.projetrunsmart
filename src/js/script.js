$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: false,
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/previous_icon.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_icon.png"></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
        
    });
  });

