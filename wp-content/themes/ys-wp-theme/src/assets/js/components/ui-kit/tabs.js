$(document).ready(function () {

    $('.tabs-title').click(function () {
        const parent = $(this).parents('.tabs');
        const index = $(this).index();

        $(parent).find('.tabs-title').removeClass('active');
        $(this).addClass('active');

        $(parent).find('.tab-content').removeClass('active');
        $(parent).find('.tab-content').eq(index).addClass('active');
    });

});