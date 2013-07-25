require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';

    $(document).scroll(function() {

        var top = $(document).scrollTop();

        if (top > 800) {
            $('nav').addClass('fade-in', 2000);
        }

        else {
            $('nav').removeClass('fade-in');
        }

    });

    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
