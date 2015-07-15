// =================================
// Global variables (jshint):

    /*global Slideout */
// =================================

var slideout = new Slideout({
    'panel': document.getElementById('slideout-panel'),
    'menu': document.getElementById('slideout-menu'),
    'padding': 256,
    'tolerance': 70
});
document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
});
