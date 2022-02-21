import { Swiper, Navigation } from 'swiper/swiper.esm';

Swiper.use([Navigation]);

const swiperInfo = new Swiper('.information__slider', {
    direction: 'horizontal',
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.information__slider-btn-next',
        prevEl: '.information__slider-btn-prev',
    }
});