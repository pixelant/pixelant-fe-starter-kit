// ########## isotope.js ###########
jQuery(function($) {
    // var layoutMode = "{layoutMode}";
    var $container = $('.tx-pxa-isotope .isotope-container');
    $container.isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'masonry',
        resizable: false,
        hiddenStyle: {
            opacity: 0,
        },
        visibleStyle: {
            opacity: 1,
            transform: 'rotate(7deg)'
        }
    });

        // var $optionSets = $('#filter .option-set');
            // $optionLinks = $optionSets.find('a');

    $('.tx-pxa-isotope .filter a').click(function(e) {
        e.preventDefault();
        var filtering = $(this).attr('data-option-value');
        $container.isotope({ filter: filtering });
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

    $(window).resize(function() {
        $container.isotope({
        // update columnWidth to a percentage of container width
            masonry: { columnWidth: $container.width() / 4 }
        });
    });
// ================================
});
// ^^^^^^^^^^ isotope.js ^^^^^^^^^^^
