require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        stellar: '../bower_components/jquery.stellar/jquery.stellar',
        tooltip: '../bower_components/sass-bootstrap/js/bootstrap-tooltip'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        stellar: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        tooltip: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap', 'stellar', 'tooltip'], function (app, $) {
    'use strict';

    $(document).scroll(function() {

        var top = $(document).scrollTop();

        if (top > 600) {
            $('.header-container').removeClass('fadeOut');
            $('.header-container').addClass('slideRight', 1000);

        }

        else {
            $('.header-container').addClass('fadeOut');

        }

    });

    /*$.stellar({
        verticalOffset: -30,
        horizontalOffset: 350
    });*/

    $(function() {
        $('[data-toggle=tooltip]').tooltip();
    });

    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});



