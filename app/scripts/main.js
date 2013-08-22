require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        stellar: '../bower_components/jquery.stellar/jquery.stellar',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        stellar: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'stellar', 'bootstrap'], function (app, $) {
    'use strict';

    $(document).scroll(function() {

        var top = $(document).scrollTop();

        if (top > 600) {
            $('.header-container').removeClass('fadeOut');
            $('.header-container').addClass('slideRight', 2000);

        }

        else {
            $('.header-container').addClass('fadeOut');

        }

    });

    /*if (screen.width < 960) {
        alert('Less than 960');
    }
    else {

        alert('More than 960');
    }

    $.stellar({
        verticalOffset: -30,
        horizontalOffset: 350
    });*/

    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
