// ########## general.js ###########

// ======= jQuery noConflict ======
// jQuery.noConflict();

// ====== class fo fixed main navigation bar   =======

jQuery(function($) {
    var navbar = $('.pxa-main-nav');
    var offsetTop = navbar.offset().top;
    $(window).on('load scroll', function() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos > offsetTop) {
            $('body:not(.navbarFixed)').addClass('navbarFixed');
        } else {
            $('body.navbarFixed').removeClass('navbarFixed');
        }
    });
});

// === Clicking on search-icon sets focus on search input-field.
jQuery(function($) {
    $('.search .icon-t3-search').click(function() {
        $('.search .form-control').focus();
    });
});

// ^^^^^^^^^^ general.js ^^^^^^^^^^^
