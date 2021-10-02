$(function () {

    //==================== Slick Slider ====================//
    $('.banner_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    //==================== About Video ====================//

    $(document).ready(function () {
        $('.venobox').venobox();
    });

    //==================== Gallery Img ====================//

    $(document).ready(function () {
        $('.veno').venobox({
            framewidth: '550px',
            frameheight: '500px',
            border: '5px',
            bgcolor: '#696969',
            titleattr: 'data-title',
            numeratio: true,
            infinigall: true,
            spinner: 'three-bounce',
            spinColor: 'var(--color)',

        });
    });

    //==================== Testimonial Slider ====================//


    $('.testimonial_con').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
    });

    //==================== Menu Fix ====================//

    var menu = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > menu) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }
    });

    //==================== Back to top button ====================//

    $('.btn_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);

    });

    $(window).on('scroll', function () {
        var abc = $(this).scrollTop();

        if (abc > 400) {
            $('.btn_top').fadeIn();
        } else {
            $('.btn_top').fadeOut();
        }
    });

    //==================== Pre Loader  ====================//

    $(window).on('load', function () {
        $('.pre_loader').delay(1000).fadeOut();
    });

    //==================== Counter-Up Part ====================//

    $('.count').counterUp({
        delay: 10,
        time: 1000,
    });

    //==================== Fotter Slider Part ====================//

    $('.center').slick({
        centerMode: true,
        centerPadding: '8px',
        slidesToShow: 5,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        pauseOnHover: false,
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        responsive: [{
                breakpoint: 1199.98,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true
                }
            },


            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
    });

});