import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';
import { initHeroSwiper, initToursSwiper, initTrainerSwiper, initReviewSwiper, initAdvantagesSwiper, initGallerySwiper } from './vendor.js';
import './vendor/leaflet';
// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  iosVhFix();
  initHeroSwiper();
  initToursSwiper();
  initTrainerSwiper();
  initReviewSwiper();
  initAdvantagesSwiper();
  initGallerySwiper();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', { passive: true }, () => {
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
    iframe.loading = 'lazy';
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
      if (!audio.querySelector('iframe')) {
        let iframe = createIframe();
        audio.appendChild(iframe);
      }
    });
    audio.classList.add('audio__wrapper--enabled');
  }

  function createIframe() {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute("width", "340");
    iframe.setAttribute("heigth", "220");
    iframe.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
    iframe.innerHTML = "Слушайте 001. Конец фронтенда, одинаковые фреймворки и логические свойства на Яндекс Музыке";
    iframe.classList.add('audio__content');
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

// header.classList.remove('main-nav--no-js');
// mainHeader.classList.remove('main-header--no-js');
// menuList.classList.remove('main-nav__inner--no-js');
// menuToggle.classList.remove('main-nav__toggle--no-js');

const onNavOutsideClick = function onNavOutsideClick(evt) {
  if (!evt.target.closest('.main-nav__list')) {
    closeMenu();
  }
};

const onNaVLinkCloseMenu = function onNaVLinkCloseMenu(evt) {
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

const openMenu = function openMenu() {
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

menuToggle.addEventListener('click', openMenu, { passive: true });


const map = L.map('map', { scrollWheelZoom: false, dragging: false }).setView([55.813152, 37.633832], 13);

L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);


const mapIcon = L.icon({
  iconUrl: './img/marker-icon-2x.png',
  iconSize: [20, 31],
  iconAnchor: [18, 50],

});

const marker = L.marker({
  lat: 55.813152,
  lng: 37.633832
}, {
  draggable: false,
  icon: mapIcon,
},
);
marker.addTo(map);

