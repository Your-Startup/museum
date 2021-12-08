import "../assets/scss/pages/home.scss";

import 'owl.carousel';
import { swiperHomeReviews } from "../assets/js/components/ui-kit/swiper";
import "../assets/js/components/home/video";

document.addEventListener("DOMContentLoaded", function () {
    swiperHomeReviews().then(() => { });
});
