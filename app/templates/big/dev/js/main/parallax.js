// =================================
// ########## parallax.js ##########
// =================================

// =================================
// Global variables (jshint):

    /*global ie */
    /*global touchSupport */
// =================================

jQuery(function($) {
    if (touchSupport || (ie === 'ie9')) {
        $('.parallax-container').each(function() {
            var img = $(this).find('.parallax-img');
            var dataImage = img.data('image-mobile');
            var dataHeight = img.data('height');
            $(this).css('height', dataHeight);
            img.css({
                'background-image': 'url(' + dataImage + ')',
                'height': dataHeight
            });
        });
    } else {
        var parallaxItems = [];
        var windowHeight = $(window).height();
        var ticking = false;
        $('.parallax-container').each(function() {
            var parallaxItem = {};
            parallaxItem.container = $(this);
            parallaxItem.img = $(this).find('.parallax-img');
            parallaxItem.container.height = parallaxItem.img.data('height');
            parallaxItem.container.offsetTop = $(this).offset().top;
            parallaxItem.img.height = windowHeight + parallaxItem.container.height;
            parallaxItem.container.css('height', parallaxItem.container.height + 'px');
            parallaxItem.img.css({
                'background-image': 'url(' + parallaxItem.img.data('image') + ')',
                'height': parallaxItem.img.height + 'px',
                'top': (((($(window).scrollTop() - parallaxItem.container.offsetTop) + windowHeight) * 0.4) - (parallaxItem.img.height - parallaxItem.container.height)) + 'px'
            });
            parallaxItems.push(parallaxItem);
        });
        var updateParallaxPos = function updateParallaxPos() {
            $.each(parallaxItems, function(index, parallaxItem) {
                var scrollTop = $(window).scrollTop();
                // if (parallaxItem.container.offsetTop + (parallaxItem.container.height) <= scrollTop || parallaxItem.container.offsetTop >= scrollTop + windowHeight) {
                //     return;
                // }
                parallaxItem.img.css('top', ((((scrollTop - parallaxItem.container.offsetTop) + windowHeight) * 0.4) - (parallaxItem.img.height - parallaxItem.container.height)) + 'px');
            });
            ticking = false;

        };
        var requestTick = function() {
            if (!ticking) {
                requestAnimationFrame(updateParallaxPos);
                ticking = true;
            }
        };
        var parallaxGo = function() {
            requestTick();
        };

        window.addEventListener('scroll', parallaxGo, false);
    }
});
// ^^^^^^^^^^ parallax.js ^^^^^^^^^^
