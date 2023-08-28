// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const heroSwiper = document.querySelector('.hero__slider');

const initHeroSwiper = () => {
  if (heroSwiper) {
    const swiper = new Swiper(heroSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.trainer__arrow--next',
        prevEl: '.trainer__arrow--prev',
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
      speed: 300,

      // //Брейкпоинты (адаптив)
      // //Ширина экрана
      breakpoints: {
        1199: {
          slidesPerView: 1,
        },
      },

    });
  }
};

export {initHeroSwiper};
