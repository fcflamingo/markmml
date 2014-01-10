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

        if (top > 200) {
            $('.top-bg').addClass('hide');

        }

        else {
            $('.top-bg').removeClass('hide');

        }

    });

    $(function() {
        $('[data-toggle=tooltip]').tooltip();
    });

    $('ul li a[href^="#"], .js-toggle').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top -60 }, 300);

        // edit: Opera and IE requires the "html" elm. animated
    });

    $('.js-toggle').on('click', function() {
        $('.location').removeClass('is-toggled');
        $(this.hash).addClass('is-toggled');
    });

    $('.location').on('mouseleave', function() {
        $(this).removeClass('is-toggled');
    });

    $('.logo-mobile').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);

        // edit: Opera and IE requires the "html" elm. animated
    });

    $('a.terms').on('click', function() {
        $('.terms-container').addClass('is-show-terms');
    });
    $('.terms-container button').on('click', function() {
        $('.terms-container').removeClass('is-show-terms');
        $('.terms-container .scroll-wrap').animate({scrollTop: 0});
    });

    $('.mobile-button').on('click', function() {
       $('.header-new').toggleClass('mobile');
    });

    $('.header-new ul a, .header-container a').on('click', function() {
        $('.header-new').removeClass('mobile');
    });


    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});



