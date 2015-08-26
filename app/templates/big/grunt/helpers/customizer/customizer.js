/* global less */

var lessvar;
var lessObj = {};
jQuery(function($) {
    $('a, button').on('click', function() {
        return false;
    });
    var $customizer = $('.js__customizer');
    var $customizerHideBtn = $('.js__customizer__hide-btn');
    var $colorPicker = $('.js__color-picker__val');
    $customizerHideBtn.on('click', function(e) {
        e.preventDefault();
        $customizer .toggleClass('_hide-customizer');
    });
    $colorPicker.spectrum({
        // flat: true,
        showInput: true,
        preferredFormat: 'hex',
        showPalette: true,
        palette: ['#ffffff'],
        showSelectionPalette: true,
        maxSelectionSize: 12,
        showInitial: true,
        localStorageKey: 'spectrum.customizer'
    });
    $colorPicker.on('move.spectrum', function(e, color) {
        e.preventDefault();
        $(this).css('background-color', color.toHexString());
        lessvar = $(this).data('lessvar');
        // var lessObj = {};
        lessObj[lessvar] = color.toHexString();
        less.modifyVars(lessObj);
    });

});

