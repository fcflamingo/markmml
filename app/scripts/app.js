/*global define */
define([], function () {
    'use strict';

    return {
        initFixedBackgrounds: function () {
            $(document).scroll(function () {
                var scrollDistanceFromTop = $(document).scrollTop();
                var introContainerDistanceFromTop = $('.intro-container').offset().top;

                if (scrollDistanceFromTop >= introContainerDistanceFromTop) {
                    $('.top-background').addClass('hide');
                } else {
                    $('.top-background').removeClass('hide');
                }
            });
        },
        removeFixedBackgrounds: function () {
            var backgroundGroup = $('.top-background, .attorneys-background, .footer-background, .bottom-wrap ');

            backgroundGroup.addClass('is-mobile');
        }
    };
});
