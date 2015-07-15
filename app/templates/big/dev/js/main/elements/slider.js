// =================================
// Global variables (jshint):
// =================================

jQuery(function($) {
    $('.js__swiper-slider').swiper({
        nextButton: '.js__swiper-slider-next',
        prevButton: '.js__swiper-slider-prev',
        pagination: '.js__swiper-slider-pagination',
        paginationClickable: true,
        preloadImages: false,
        loop: true,
        lazyLoading: true
    });
});
