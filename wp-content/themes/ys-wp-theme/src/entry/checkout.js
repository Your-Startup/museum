import "../assets/scss/pages/page/checkout.scss";

import { EffectFade, Lazy, Navigation, Pagination, Swiper, Thumbs } from 'swiper/swiper.esm';

Swiper.use([Pagination, EffectFade, Navigation, Lazy, Thumbs]);

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 7,
    spaceBetween: 0,
    slidesPerGroup: 7,
    navigation: {
        nextEl: '.ticket-next',
        prevEl: '.ticket-prev',
    },
});

let calcData;

window.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelectorAll('.ticket__enabled');
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            slides.forEach(x => {
                x.classList.remove('slide-active')
            })
            slide.classList.add('slide-active');
            document.getElementById('day-month').textContent = slide.querySelector('.slider__date').textContent
            document.getElementById('year').textContent = new Date().getFullYear();
            document.querySelector('.ticket__date-month-label').innerHTML = `${document.getElementById('day-month').textContent} ${document.getElementById('year').textContent}`
            $('.ticket__date-month').val(`${document.getElementById('day-month').textContent} ${document.getElementById('year').textContent}`).change();
        })
    })

    let timePickers = document.querySelectorAll('.ticket__timepicker');

    timePickers.forEach(timePicker => {
        timePicker.addEventListener('click', () => {
            timePickers.forEach((y) => {
                y.classList.remove('ticket__timepicker-active')
            })
            timePicker.classList.add('ticket__timepicker-active')
            document.querySelector('.ticket__date-time-label').innerHTML = timePicker.textContent;
            $('.ticket__date-time').val(timePicker.textContent).change();
        })
    })


    $('.ticket__btn').click(function () {
        const parent = $(this).parent();
        const input = $(parent).find('input');

        if ($(input).hasClass('ticket__quantity-input-active')) {

            const value = $(input).val();

            if ($(this).hasClass('minus')) {
                if (value != 0) {
                    $(input).val(Number(value) - 1).change();
                }
            }

            if ($(this).hasClass('plus')) {
                if (value != $(input).attr('max')) {
                    $(input).val(Number(value) + 1).change();
                }
            }

        }
    });

    function updateCalcData() {
        calcData = {
            tickets: {}
        };

        // Сбор и сортировка данных из полей
        $('.checkout-input-js').each(function () {
            if ($(this).hasClass('name-js')) {
                const name = $(this).attr('name').replace('_name', '');
                if (calcData.tickets.hasOwnProperty(name)) {
                    calcData.tickets[name] = Object.assign(calcData.tickets[name], { name: $(this).val() });
                } else {
                    calcData.tickets[name] = { name: $(this).val() };
                }
            } else if ($(this).hasClass('price-js')) {
                const name = $(this).attr('name').replace('_price', '');
                if (calcData.tickets.hasOwnProperty(name)) {
                    calcData.tickets[name] = Object.assign(calcData.tickets[name], { price: $(this).val() });
                } else {
                    calcData.tickets[name] = { price: $(this).val() };
                }
            } else if ($(this).hasClass('quantity-js')) {
                const name = $(this).attr('name');
                if (calcData.tickets.hasOwnProperty(name)) {
                    calcData.tickets[name] = Object.assign(calcData.tickets[name], { quantity: $(this).val() });;
                } else {
                    calcData.tickets[name] = { quantity: $(this).val() };;
                }
            } else {
                calcData[$(this).attr('name')] = $(this).val();
            }
        });

        // Подсчет стоимости и подготовка шаблона
        calcData.sum = 0;
        calcData.quantity = 0;

        let ticketsTemplate = '';

        for (var key in calcData.tickets) {
            if (calcData.tickets[key].quantity > 0) {
                calcData.sum += calcData.tickets[key].price * calcData.tickets[key].quantity;
                calcData.quantity = Number(calcData.quantity) + Number(calcData.tickets[key].quantity);

                ticketsTemplate += `<div class="ticket__outcome-flex">
                                        <div class="ticket__outcome-age">${calcData.tickets[key].name}</div>
                                        <div class="ticket__outcome-quantity">${calcData.tickets[key].quantity}</div>
                                        <div class="ticket__outcome-price">x ${calcData.tickets[key].price} ₽</div>
                                    </div>`;
            }
        }

        // Вывод данных
        if (calcData.date == 'Выберите дату') {
            $('#final-date').text('-');
        } else {
            $('#final-date').text(calcData.date);
        }

        if (calcData.time == 'и время') {
            $('#final-time').text('--:--');
        } else {
            $('#final-time').text(calcData.time);
        }

        $('#final-price').text(calcData.sum);

        $('#final-tickets').html(ticketsTemplate)
    }

    updateCalcData();

    $('.checkout-input-js').on("change", function () {
        updateCalcData();
    });

    $('#pay-btn').click(function () {

        if (calcData.date == 'Выберите дату' || calcData.time == 'и время' || calcData.quantity == 0) {
            console.error('Не заполнены обязательные поля.');
        } else {
            console.log(calcData);
            // TODO ajax 
        }
    });
})