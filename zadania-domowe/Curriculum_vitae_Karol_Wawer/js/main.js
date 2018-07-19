$(document).ready(function () {
    $(window).on('scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        var navHeight = $('.quater-background').outerHeight();
        if (scrollValue > navHeight) {
            $('.navbar').addClass('affix');
            $('.titleWeb').addClass('affixText');
        } else {
            $('.navbar').removeClass('affix');
            $('.titleWeb').removeClass('affixText');


        }
    });
    $(window).on('scroll', function (event) {
        var scrollValue = $(window).scrollTop();
        var navHeight = $('.quater-background').outerHeight();
        var sectionHeight = $('header').outerHeight()-102;
        if (scrollValue > sectionHeight) {
            $('.titleWeb').removeClass('affixText');
            $('.titleWeb').addClass('stickText');

        } else {

            $('.titleWeb').removeClass('stickText');

        }
    });




});
