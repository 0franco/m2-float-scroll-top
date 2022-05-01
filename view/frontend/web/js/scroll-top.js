define([
    'jquery',
], function ($) {
    'use strict';

    return function (config, element) {
        $(element).click(function () {
            $("html, body").stop().animate({scrollTop: 0}, 500, 'swing', function () {
            });
        })

        $(window).scroll(function () {
            let diff = $(window).scrollTop();

            if (diff === 0) {
                $('.scroll-top').hide('hide');
                return;
            }

            if (diff > 200) {
                $('.scroll-top').show('fast');
            }
        })
    };
});
