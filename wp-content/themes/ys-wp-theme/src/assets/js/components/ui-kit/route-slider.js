import { Swiper, Navigation } from 'swiper/swiper.esm';

Swiper.use([Navigation]);

const swiper = new Swiper('.route-slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.route-slider-next',
        prevEl: '.route-slider-prev',
    },
    on: {
        init() {
            setTimeout(updateFraction, 0, this);
        },
        slideChange() {
            updateFraction(this);
        },
        resize() {
            updateFraction(this);
        },
    }
});

function updateFraction(slider) {
    const { realIndex, loopedSlides } = slider;

    $('.route-slider-focus').text(realIndex + 1);
    $('.route-slider-all').text(loopedSlides);
}