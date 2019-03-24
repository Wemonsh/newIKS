$(document).ready(function() {
    console.log( "document loaded" );
    // Загрузка анимаций
    new WOW().init();

    // Прилипающая навигация
    var options = {
        offset: 360,
        onStick: function () {
            $(".hamburger--demo-5").css({"position":"fixed", "top":"5px"});
        },
        onUnstick: function () {
            $(".hamburger--demo-5").css({"position":"absolute", "top":"30px"});
        }
    };

    var header = new Headhesive('.header', options);
});

$(document).ready(function(){
    $('.reviews-slider').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
            ]
    });


    if ($(window).width() <= '540') {
        $('.social-slider').slick({
            responsive: [
                {
                    breakpoint: 540,
                    settings: {
                        dots: true,
                        arrows: false,
                        infinite: false,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }


});


