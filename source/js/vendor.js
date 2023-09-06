// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const heroSwiper = document.querySelector('.hero__slider');
const toursSwiper = document.querySelector('.tours__slider');
const trainerSwiper = document.querySelector('.training__slider');
const reviewSwiper = document.querySelector('.review__slider');
const advantagesSwiper = document.querySelector('.advantages__slider');
const gallerySwiper = document.querySelector('.gallery__slider');

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

      keyboard: true,

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
      loop: false,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      // stopOnLastSlide: true,
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
          spaceBetween: 18,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
        },
      },

    });
  }
};
const initTrainerSwiper = () => {
  if (trainerSwiper) {
    const swiper = new Swiper(trainerSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.training__button--next',
        prevEl: '.training__button--prev',
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
      loop: false,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      // stopOnLastSlide: true,
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 10,
          slidesPerGroup: 1,
        },
      },

    });
  }
};

const initReviewSwiper = () => {
  if (trainerSwiper) {
    const swiper = new Swiper(reviewSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.review__button--next',
        prevEl: '.review__button--prev',
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
      loop: false,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      // stopOnLastSlide: true,
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
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
        1199: {
          slidesPerView: 'auto',
          spaceBetween: 10,
        },
      },

    });
  }
};

const initAdvantagesSwiper = () => {
  if (trainerSwiper) {
    const swiper = new Swiper(advantagesSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
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
      // stopOnLastSlide: true,
      //   // Отключить после ручного переключения
      //   disableOnInteraction: false,
      // },

      // Скорость прокрутки - по умолчанию 300мс
      speed: 600,

      // //Брейкпоинты (адаптив)
      // //Ширина экрана
      breakpoints: {
        1199: {
          slidesPerView: 'auto',
          spaceBetween: 30,
        },
        767: {
          slidesPerView: 5,
          loop: false,
          spaceBetween: 0,
        },
        320: {
          slidesPerView: 5,
          loop: false,
        },
      },

    });
  }
};

const initGallerySwiper = () => {
  if (gallerySwiper) {
    const swiper = new Swiper(gallerySwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
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
      loop: false,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      // stopOnLastSlide: true,
      //   // Отключить после ручного переключения
      //   disableOnInteraction: false,
      // },

      // Скорость прокрутки - по умолчанию 300мс
      speed: 600,
      slidesPerView: 'auto',

      // //Брейкпоинты (адаптив)
      // //Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 3,
        },
        767: {
          spaceBetween: 5,
        },
        1199: {
          spaceBetween: 5,
          slidesPerGroup: 1,
        },
      },

    });
  }
};

export {initHeroSwiper, initToursSwiper, initTrainerSwiper, initReviewSwiper, initAdvantagesSwiper, initGallerySwiper};
