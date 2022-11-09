const dropDawnMenu = document.querySelector('.dropDownMenu');
const sortMenu = document.querySelector('.sort');

const hide = (e) => {
  if (!e.target.className.includes('menuAd__Btn_options')) {
    dropDawnMenu.classList.remove('dropDownMenu_active');
  }
  if (!e.target.className.includes('radioMenu__item_sort')) {
    sortMenu.classList.remove('sort_active');
  }
};

window.addEventListener('click', hide);
