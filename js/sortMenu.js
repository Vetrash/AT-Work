import activeDropMenu from './dropDownMenu.js';

const listAd = document.querySelector('.listAd');
const sortBtn = document.querySelector('.radioMenu__item_sort');
const sortMenu = document.querySelector('.sort');

const activSort = (elem) => {
  if (sortMenu.classList.contains('sort_active')) {
    sortMenu.classList.remove('sort_active');
  } else {
    const { pageY, pageX } = elem;
    sortMenu.classList.add('sort_active');
    sortMenu.style.left = `${pageX - 100}px`;
    sortMenu.style.top = `${pageY - 170}px`;
  }
};

sortBtn.addEventListener('click', activSort);
const sortMenuBtns = document.querySelectorAll('.sort__item');
const sort = (e) => {
  const newText = e.target.closest('.sort__item').cloneNode(true);
  newText.querySelector('.hover').remove();
  sortBtn.innerHTML = newText.innerHTML;
  const type = e.target.getAttribute('data-type');
  const dir = e.target.getAttribute('data-dir');
  const operator = {
    up: [-1, 1],
    down: [1, -1],
  };
  const concatType = `data-${type}`;
  const cloneDate = [...listAd.children];
  cloneDate.sort((a, b) => {
    if (a.getAttribute(concatType) < b.getAttribute(concatType)) {
      return operator[dir][0];
    }
    if (a.getAttribute(concatType) > b.getAttribute(concatType)) {
      return operator[dir][1];
    }
    return 0;
  });
  listAd.innerHTML = '';
  cloneDate.forEach((elem) => {
    listAd.innerHTML += elem.outerHTML;
  });
  const btnsSetting = listAd.querySelectorAll('.menuAd__Btn_options');
  btnsSetting.forEach((elem) => {
    elem.addEventListener('click', activeDropMenu);
  });
  window.dispatchEvent(new CustomEvent('sortAd'));
};
sortMenuBtns.forEach((elem) => {
  elem.addEventListener('click', sort);
});
