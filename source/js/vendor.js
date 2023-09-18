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
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: true,
      keyboard: true,
      focusableElements: true,

      speed: 300,

      breakpoints: {
        1199: {
          slidesPerView: 1,
          allowTouchMove: false,
        },
      },

      pagination: {
        el: '.hero__pagination',
        loop: true,
        clickable: true,
        focusableElements: true,
      },
    });
  }
};


const initToursSwiper = () => {
  if (toursSwiper) {
    const swiper = new Swiper(toursSwiper, {

      navigation: {
        nextEl: '.tours__button--next',
        prevEl: '.tours__button--prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: false,
      speed: 600,
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

      navigation: {
        nextEl: '.training__button--next',
        prevEl: '.training__button--prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: false,
      speed: 600,
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
      navigation: {
        nextEl: '.review__button--next',
        prevEl: '.review__button--prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: false,
      speed: 600,
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
      navigation: {
        nextEl: '.advantages__button--next',
        prevEl: '.advantages__button--prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: true,
      speed: 600,
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
      navigation: {
        nextEl: '.gallery__button--next',
        prevEl: '.gallery__button--prev',
      },
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      loop: false,
      speed: 600,
      slidesPerView: 'auto',
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


export { initHeroSwiper, initToursSwiper, initTrainerSwiper, initReviewSwiper, initAdvantagesSwiper, initGallerySwiper };
