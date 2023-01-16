// const btnSwitchTheme = document.querySelector('.switch_theme');
// console.log('btnSwitchTheme', btnSwitchTheme);
// console.log('test');
// btnSwitchTheme.addEventListener('click', onBtnSwitchTheme);

// function onBtnSwitchTheme() {
//   console.log('click on button');
// }

window.addEventListener('load', windowLoad);

function windowLoad() {
  const htmlBlock = document.documentElement;

  const saveUserTheme = localStorage.getItem('user-theme');

  // Підятгування теми з системи
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(preferens-color-scheme:dark)').matches
      ? 'dark'
      : 'light';
  }
  window
    .matchMedia('(preferens-color-scheme:dark)')
    .addEventListener('change', e => {
      !saveUserTheme ? changeTheme() : null;
    });

  // Зміна теми по кліку
  const themeButton = document.querySelector('.switch_theme');
  const resetButton = document.querySelector('.reset_theme');
  if (themeButton) {
    themeButton.addEventListener('change', function (e) {
      //     if (this.checked) {
      //     resetButton.classList.add('active');
      //     changeTheme(true);
      //   }
      resetButton.classList.add('active');
      changeTheme(true);
    });
  }
  if (resetButton) {
    resetButton.addEventListener('click', function (e) {
      resetButton.classList.remove('active');
      localStorage.setItem('user-theme', '');
    });
  }

  // функція додавання клау теми
  function setThemeClass() {
    if (saveUserTheme) {
      htmlBlock.classList.add(saveUserTheme);
      resetButton.classList.add('active');
    } else {
      htmlBlock.classList.add(userTheme);
    }
  }

  // Додаємо клас теми
  setThemeClass();
  //    Функція зміни теми
  function changeTheme(saveTheme = false) {
    let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
    let newTheme;

    if (currentTheme === 'light') {
      newTheme = 'dark';
    } else if (currentTheme === 'dark') {
      newTheme = 'light';
    }
    htmlBlock.classList.remove(currentTheme);
    htmlBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
}
