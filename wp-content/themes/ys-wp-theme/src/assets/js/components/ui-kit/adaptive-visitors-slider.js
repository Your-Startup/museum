import { Swiper, Navigation } from 'swiper/swiper.esm';

Swiper.use([Navigation]);

const swiper = new Swiper('.adaptive-visitors__slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.adaptive-visitors__img-right',
        prevEl: '.adaptive-visitors__img-left',
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

    console.log(slider);
    $('.adaptive-visitors__btn-focus').text(realIndex + 1);
    $('.adaptive-visitors__btn-all').text(loopedSlides);
}