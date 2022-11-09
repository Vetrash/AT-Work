const settingBtn = document.querySelectorAll('.menuAd__Btn_options');
const dropDawnMenu = document.querySelector('.dropDownMenu');

const activeDropMenu = (elem) => {
  if (dropDawnMenu.classList.contains('dropDownMenu_active')) {
    dropDawnMenu.classList.remove('dropDownMenu_active');
  } else {
    const { pageY, pageX } = elem;
    dropDawnMenu.classList.add('dropDownMenu_active');
    dropDawnMenu.style.left = `${pageX - 200}px`;
    dropDawnMenu.style.top = `${pageY - 160}px`;
  }
};

settingBtn.forEach((elem) => {
  elem.addEventListener('click', activeDropMenu);
});

export default activeDropMenu;
