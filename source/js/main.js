import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initHeroSwiper, initToursSwiper, initTrainerSwiper} from './vendor.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initHeroSwiper();
  initToursSwiper();
  initTrainerSwiper();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

window.addEventListener('DOMContentLoaded', function () {
  let video = document.querySelector('.media');

  function setupVideo() {
    let link = video.querySelector('.media__link');
    let button = video.querySelector('.media__button');
    video.addEventListener('click', function () {
      let iframe = createIframe();
      link.remove();
      button.remove();
      video.appendChild(iframe);
    });
    video.classList.add('media__video--enabled');
  }

  function createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw');
    iframe.classList.add('media__content');
    return iframe;
  }

  setupVideo();
});

window.addEventListener('DOMContentLoaded', function () {
  let audio = document.querySelector('.audio');

  function setupAudio() {
    let button = audio.querySelector('.audio__button-play');
    audio.addEventListener('click', function () {
      let iframe = createIframe();
      button.remove();
      audio.appendChild(iframe);
    });
    audio.classList.add('.audio__wrapper--enabled');
  }

  function createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', 'https://music.yandex.ru/album/25474374?dir=desc&activeTab=track-list');
    iframe.classList.add('.audio__content');
    return iframe;
  }

  setupAudio();
});
// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
const header = document.querySelector('.main-nav');
const menuList = header.querySelector('.main-nav__inner');
const menuToggle = header.querySelector('.main-nav__toggle');
// const mainHeader = document.querySelector('.main-header');

// header.classList.remove('page-header--no-js');
// mainHeader.classList.remove('main-header--no-js');
// menuList.classList.remove('nav--no-js');
// menuToggle.classList.remove('page-header__toggle--no-js');

const onNavOutsideClick = (evt) => {
  if (!evt.target.closest('.main-nav__list')) {
    closeMenu();
  }
};

const onNaVLinkCloseMenu = (evt) => {
  if (!evt.target.closest('.main-nav__link')) {
    return;
  }
  closeMenu();
};

function closeMenu() {
  menuList.classList.remove('main-nav__inner--is-active');
  header.classList.remove('main-nav--is-active');
  menuToggle.classList.remove('main-nav__toggle--is-active');
  window.scrollLock.enableScrolling();
  menuList.removeEventListener('click', onNaVLinkCloseMenu);
  menuList.removeEventListener('click', onNavOutsideClick);
  menuToggle.removeEventListener('click', closeMenu);
}

const openMenu = () => {
  if (!menuToggle) {
    return;
  }
  header.classList.add('main-nav--is-active');
  menuToggle.classList.add('main-nav__toggle--is-active');
  menuList.classList.add('main-nav__inner--is-active');
  window.scrollLock.disableScrolling();
  menuList.addEventListener('click', onNaVLinkCloseMenu);
  menuList.addEventListener('click', onNavOutsideClick);
  menuToggle.addEventListener('click', closeMenu);
};

menuToggle.addEventListener('click', openMenu);
