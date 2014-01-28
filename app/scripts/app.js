/*global define */
define([], function () {
    'use strict';

    return {
        initFixedBackgrounds: function () {
            $(document).scroll(function () {
                var scrollDistanceFromTop = $(document).scrollTop();
                var introContainerDistanceFromTop = $('#is-intro-container').offset().top;

                if (scrollDistanceFromTop >= introContainerDistanceFromTop) {
                    $('#is-first-background').addClass('hide');
                } else {
                    $('#is-first-background').removeClass('hide');
                }
            });
        },
        removeFixedBackgrounds: function () {
            var backgroundGroup = $('.top-background, .attorneys-background, .footer-background, .bottom-wrap ');

            backgroundGroup.addClass('is-mobile');
        }
    };
});
