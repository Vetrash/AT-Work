import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const reInit = () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
};
window.addEventListener('sortAd', () => { reInit(); });
