$(document).ready(function() {
    console.log( "document loaded" );
    // Загрузка анимаций
    new WOW().init();

    // Прилипающая навигация
    var options = {
        offset: 1080,
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
        slidesToScroll: 1
    });
});


