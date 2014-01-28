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
            var backgroundGroup = $('#is-first-background, #is-second-background, #is-third-background, .bottom-wrap ');

            backgroundGroup.addClass('is-mobile');
        }
    };
});
