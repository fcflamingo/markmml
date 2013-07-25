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
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});

$(document).ready(function(){

    $(document).scroll(function() {

        var top = $(document).scrollTop();

        if (top > 800) {
            $('nav').addClass("fade-in", 2000);
        }

        else {
            $('nav').removeClass("fade-in");
        }

    });

});
