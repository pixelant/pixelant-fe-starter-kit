// =================================
// ########## extendedMainNav.js ##########
// =================================
// =================================
// Global variables (jshint):

    /*global touchSupport */
// =================================

jQuery(function($) {
    // Caching variables
    var html = $('html');
    var body = $('body');
    var headerTop = $('.header-top');
    var navExtended = $('.js__main-nav-extended');
    var mobileDropdownLink = $('.js__mobile-dropdown-link');
    var navbarCollapse = navExtended.find('.navbar-collapse');
    var mobileDropdown = navExtended.find('.navbar-nav').children('li');

    // Bootstrap Hover Dropdown plugin. Execute  dropdown on no-touch screen > 992px.
    if (!touchSupport && $(window).width() > 992) {
        navExtended.find('.dropdown-toggle-clickable').dropdownHover({ screenSize:992, delay:300 });
    }

    // Freaze "body" when menu opens using "mobile-menu-collapsed". Aligning scroll bar on desktop.
    var mainNavSmallScreen = function mainNavSmallScreen() {
        if ($(window).width() < 992) {
            var bodyWidth = body.width();
            navbarCollapse.on('show.bs.collapse', function() {
                html.addClass('mobile-menu-collapsed');
                if (!touchSupport) {
                    var menuWidth = body.width();
                    var bodyWidthFull = menuWidth - bodyWidth;
                    headerTop.css({
                        'padding-right': bodyWidthFull
                    });
                }
            });
            navbarCollapse.on('hide.bs.collapse', function() {
                html.removeClass('mobile-menu-collapsed');
                if (!touchSupport) {
                    headerTop.css({
                        'padding-right': 0
                    });
                }
            });
        }
    };

    // Cleanup function to clean unneeded classes
    var cleanup = function cleanup() {
        mobileDropdown.removeClass('open-mobile-dropdown');
        mobileDropdown.removeClass('open');
    };

    // Add click event to dropdown link on mobile devices.
    mobileDropdownLink.on('click', function(e) {
        e.preventDefault();
        if (touchSupport && $(window).width() > 992) {
            mobileDropdown.not($(this).parent()).removeClass('open');
            $(this).parent('li').toggleClass('open');
        }
        if ($(window).width() < 992) {
            $(this).parent('li').toggleClass('open-mobile-dropdown');
        }
    });

    mainNavSmallScreen();
    $(window).on('orientationchange',function() {
        mainNavSmallScreen();
        cleanup();
    });

    // Navigation toggle button active class
    // $('.js__pxa-nav-toggle-button').on('click', function(e) {
    //     e.preventDefault();
    //     $(this).toggleClass('active');
    // });

});
