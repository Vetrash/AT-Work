let allSelector = document.querySelectorAll('.checker__conteinerAd > input');
let mainSelector = document.querySelector('.checker__radioMenu > input');

const cheker = () => {
  let sumChecked = 0;
  allSelector.forEach((elem) => {
    if (elem.checked) { sumChecked += 1; }
  });
  const isAllCheck = sumChecked === allSelector.length;
  mainSelector.checked = isAllCheck;
};

allSelector.forEach((elem) => {
  elem.addEventListener('click', cheker);
});

const mainCheker = (e) => {
  allSelector.forEach((elem) => {
    elem.checked = e.target.checked;
  });
};
mainSelector.addEventListener('click', mainCheker);

window.addEventListener('sortAd', () => {
  allSelector = document.querySelectorAll('.checker__conteinerAd > input');
  mainSelector = document.querySelector('.checker__radioMenu > input');
  allSelector.forEach((elem) => {
    elem.addEventListener('click', cheker);
  });
  mainSelector.checked = false;
});
