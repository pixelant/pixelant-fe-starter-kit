// =================================
// Global variables (jshint):
// =================================
jQuery(function($) {
    var slidesPerView;
    (function() {
        var inWidth = window.innerWidth;
        if (inWidth >= 1200)  {
            slidesPerView = 4;
        } else if (inWidth >= 990 && inWidth < 1200) {
            slidesPerView = 3;
        } else if (inWidth >= 768 && inWidth < 990) {
            slidesPerView = 2;
        } else {
            slidesPerView = 1;
        }
    })();
    $('.js__swiper-carousel').swiper({
        nextButton: '.js__swiper-carousel-next',
        prevButton: '.js__swiper-carousel-prev',
        slidesPerView: slidesPerView,
        spaceBetween: 30,
        loop: true,
        autoplay: 2500
    });
});

