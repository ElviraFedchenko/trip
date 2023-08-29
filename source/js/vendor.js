// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const heroSwiper = document.querySelector('.hero__slider');
const toursSwiper = document.querySelector('.tours__slider');

const initHeroSwiper = () => {
  if (heroSwiper) {
    const swiper = new Swiper(heroSwiper, {

      // Navigation arrows
      // Включение/Отключение перетаскивания на ПК
      simulateTouch: false,
      // Курсор перетаскивания
      grabCursor: false,
      // Количество слайдов для показа
      // slidesPerView: 4,
      // Отключение функционала, если слайдов меньше чем нужно
      watchOverflow: true,
      // Отступ между слайдами
      // spaceBetween: 39,
      // Количество пролистываемых слайдов
      // slidesPerGroup: 1,
      // Бесконечный слайдер
      loop: true,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      //   stopOnLastSlide: true,
      //   // Отключить после ручного переключения
      //   disableOnInteraction: false,
      // },

      // Скорость прокрутки - по умолчанию 300мс
      speed: 300,

      // //Брейкпоинты (адаптив)
      // //Ширина экрана
      breakpoints: {
        1199: {
          slidesPerView: 1,
        },
      },

      pagination: {
        el: '.hero__pagination',
        loop: true,
        clickable: true,
      },

    });
  }
};

const initToursSwiper = () => {
  if (toursSwiper) {
    const swiper = new Swiper(toursSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
      },
      // Включение/Отключение перетаскивания на ПК
      simulateTouch: false,
      // Курсор перетаскивания
      grabCursor: false,
      // Количество слайдов для показа
      // slidesPerView: 4,
      // Отключение функционала, если слайдов меньше чем нужно
      watchOverflow: true,
      // Отступ между слайдами
      // spaceBetween: 39,
      // Количество пролистываемых слайдов
      // slidesPerGroup: 1,
      // Бесконечный слайдер
      loop: true,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      //   stopOnLastSlide: true,
      //   // Отключить после ручного переключения
      //   disableOnInteraction: false,
      // },

      // Скорость прокрутки - по умолчанию 300мс
      speed: 600,

      // //Брейкпоинты (адаптив)
      // //Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
      },

    });
  }
};

export {initHeroSwiper, initToursSwiper};
