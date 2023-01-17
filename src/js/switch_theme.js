window.addEventListener('load', windowLoad);

function windowLoad() {
  const htmlBlock = document.documentElement;

  // зберігаємо тему
  const saveUserTheme = localStorage.getItem('user-theme');
  const filmsNameText = document.querySelector('.films__info p:first-child');
  const allFilmsNameText = document.querySelectorAll(
    '.films__info p:first-child'
  );
  console.log('windowLoad ~ allFilmsNameText', allFilmsNameText);

  if (saveUserTheme === 'dark') {
    check();
    // addBlackColor();
    allNameFilmsAddBlackColor();
    // const currentColor = 'dark';
    // changeTextColor(currentColor);
  }

  function check() {
    document.getElementById('checkbox').checked = true;
  }
  function uncheck() {
    document.getElementById('checkbox').checked = false;
  }

  // Підятгування теми з системи
  let userTheme;
  if (window.matchMedia) {
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  if (userTheme === 'dark') {
    check();
    // addBlackColor();
    allNameFilmsAddBlackColor();
    // const currentColor = 'dark';
    // changeTextColor(currentColor);
  }
  if (saveUserTheme === 'light') {
    userTheme = '';
    uncheck();
    // removeBlackColor();
    allNameFilmsRemoveBlackColor();
  }

  window
    .matchMedia('(prefers-color-scheme:dark)')
    .addEventListener('change', e => {
      !saveUserTheme ? changeTheme() : null;
    });

  // Зміна теми по кліку
  const themeButton = document.querySelector('.switch_theme');
  const resetButton = document.querySelector('.reset_theme');

  if (themeButton) {
    themeButton.addEventListener('change', function (e) {
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

  // функція додавання клаcу теми
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
    //   changeTextColor(newTheme);
    changeAllTextColor(newTheme);
    htmlBlock.classList.remove(currentTheme);
    htmlBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
  function changeTextColor(newTheme) {
    if (newTheme === 'dark') {
      filmsNameText.classList.add('films__name--color');
    } else {
      filmsNameText.classList.remove('films__name--color');
    }
  }
  function addBlackColor() {
    filmsNameText.classList.add('films__name--color');
  }

  function removeBlackColor() {
    filmsNameText.classList.remove('films__name--color');
  }

  function changeAllTextColor(newTheme) {
    if (newTheme === 'dark') {
      allNameFilmsAddBlackColor();
    } else {
      allNameFilmsRemoveBlackColor();
    }
  }
  function allNameFilmsAddBlackColor() {
    for (let i = 0; i < allFilmsNameText.length; i += 1) {
      allFilmsNameText[i].classList.add('films__name--color');
    }
  }
  function allNameFilmsRemoveBlackColor() {
    for (let i = 0; i < allFilmsNameText.length; i += 1) {
      allFilmsNameText[i].classList.remove('films__name--color');
    }
  }
}
