$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/previous_icon.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/next_icon.png"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            },
            
            breakpoint: 480,
            settings: {
                dots: true,
                arrows: false
                }
            
        }]

    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');

    });

    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });


    // });

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     });
    // });

    //Pour l'optimisation du code
    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });

        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    // $('.button_mini').on('click', function() {
    //     $('.overlay, #order').fadeIn('slow');
    // });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
            
        });
    });
    // $('#consultation-form').validate();
    // $('#consultation form').validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 2
    //         },
    //         phone: 'required',
    //         email: {
    //             required: true,
    //             email: true
    //         }
    //     },
    //     messages: {
    //         name: {
    //             require: "Please specify your name",
    //             minlength: jQuery.validator.format("At least {0} characters required!")
    //         }, 
    //         phone: "Please specify your phone",
    //         email: {
    //           required: "We need your email address to contact you",
    //           email: "Your email address must be in the format of name@domain.com"
    //         }
    //     }
    // });
    // $('#order form').validate();


    //Script universel pour toutes mes formes
    function valideForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    require: "Please specify your name",
                    minlength: jQuery.validator.format("At least {0} characters required!")
                }, 
                phone: "Please specify your phone",
                email: {
                  required: "We need your email address to contact you",
                  email: "Your email address must be in the format of name@domain.com"
                }
            }
        });
    }
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    // $('#phone').mask("+7 (999) 999-99-99");
    $("input[name=phone]").inputmask("+7 (999) 999-99-99");
    $("input[name=email]").inputmask("email");

});