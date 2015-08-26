    jQuery(function($) {

        // less.watch();
        // var parent = $('.lll');
        // var picker = new Picker(parent);
        // $('').on('click', function(e){
        // // parent.onclick = function() {
        //     e.preventDefault()
        //     picker.show();
        // // };
        // });
        // var parent = $('#rrr');
        var parent = document.getElementById('colorPicker');
        var picker = new Picker(parent);
        var bla;
        parent.onclick = function(e) {
          e.preventDefault()
          picker.show();
            bla = this.getAttribute('data-lessvar');
        };
        picker.on_done = function(colour) {
            var lessObj = {};
            lessObj[bla] = colour.rgba().toString();;
            less.modifyVars(lessObj);
            parent.style.background = colour.rgba().toString();
            };
        // picker.on_done = function(colour) {

        //         // parent.style.background = colour.rgba().toString();
        //         var lessObj = {};
        //         lessObj['@main-color'] = colour.rgba().toString();;
        //         less.modifyVars(lessObj);
        // };
        // $('.ttt').on('change', function(){
        //     // var mainColor = '@main-color'
        //     var lessObj = {};
        //     lessObj[$(this).data('bbb')] = $(this).val();

        //     // console.log(yourObject );
        //     // console.log($(this).data('bbb'));
        //     // var that = $(this);
        //     // var rrr = $(this);
        //     // lessKey = $(this).data('bbb');
        //     // return console.log(lessKey);
        //     less.modifyVars(lessObj);
        // });

    });
    // jQuery(function($) {
    // });
