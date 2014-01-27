/*global define */
define([], function () {
    'use strict';

    return {
        initFixedBackgrounds: function () {
            $(document).scroll(function () {
                var scrollDistanceFromTop = $(document).scrollTop();
                var introContainerDistanceFromTop = $('.intro-container').offset().top;

                if (scrollDistanceFromTop >= introContainerDistanceFromTop) {
                    $('.top-bg').addClass('hide');
                } else {
                    $('.top-bg').removeClass('hide');
                }
            });
        }
    };
});
