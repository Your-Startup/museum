$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1
    });

    $('.main-silder-nav_next').click(function () {
        owl.trigger('next.owl.carousel');
    })

    $('.main-silder-nav_prev').click(function () {
        owl.trigger('prev.owl.carousel');
    })
})