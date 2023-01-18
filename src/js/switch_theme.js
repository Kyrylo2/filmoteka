window.addEventListener('load', windowLoad);

function windowLoad() {
  // HTML
  const htmlBlock = document.documentElement;
  // Змінна збереження теми в локалсторейдж
  const saveUserTheme = localStorage.getItem('user-theme');
  //   змінна всіх назв фільмів
  const allFilmsNameText = document.querySelectorAll(
    '.films__info p:first-child'
  );
  // змінні пагінації
  const btnPagination = document.querySelectorAll(
    '.tui-pagination .tui-page-btn'
  );
  const btnPagNext = document.querySelector('.tui-next');
  const btnPagLast = document.querySelector('.tui-last');
  const btnPagPrev = document.querySelector('.tui-prev');
  const btnPagFirst = document.querySelector('.tui-first');
  const btnPagLastChild = document.querySelector('.tui-last-child');

  // зберігаємо тему
  if (saveUserTheme === 'dark') {
    check();
    addAllNameFilmsBlackColor();
    addWhitekColorPagination();
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
    addAllNameFilmsBlackColor();
    addWhitekColorPagination();
    // const currentColor = 'dark';
    // changeTextColor(currentColor);
  }
  if (saveUserTheme === 'light') {
    userTheme = '';
    uncheck();
    // removeBlackColor();
    removeAllNameFilmsBlackColor();
    removeWhiteColorPagination();
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
    themeButton.addEventListener('change', function () {
      //   resetButton.classList.add('active');
      changeTheme(true);
    });
  }
  if (resetButton) {
    resetButton.addEventListener('click', function () {
      //   resetButton.classList.remove('active');
      localStorage.setItem('user-theme', '');
    });
  }

  // функція додавання клаcу теми- in class
  function setThemeClass() {
    if (saveUserTheme) {
      console.log('setThemeClass -true');
      htmlBlock.classList.add(saveUserTheme);
      resetButton.classList.add('active');
    } else {
      console.log('setThemeClass -false');
      htmlBlock.classList.add(userTheme);
    }
  }

  // Додаємо клас теми - in class
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

    changeAllTextColor(newTheme);
    changePaginationColor(newTheme);
    htmlBlock.classList.remove(currentTheme);
    htmlBlock.classList.add(newTheme);
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
  }
  //   зміна кольору назв фільмів
  function changeAllTextColor(newTheme) {
    if (newTheme === 'dark') {
      addAllNameFilmsBlackColor();
    } else {
      removeAllNameFilmsBlackColor();
    }
  }
  function addAllNameFilmsBlackColor() {
    for (let i = 0; i < allFilmsNameText.length; i += 1) {
      allFilmsNameText[i].classList.add('films__name--color');
    }
  }
  function removeAllNameFilmsBlackColor() {
    for (let i = 0; i < allFilmsNameText.length; i += 1) {
      allFilmsNameText[i].classList.remove('films__name--color');
    }
  }

  // Зміна кольору кнопок пагінації
  function changePaginationColor(newTheme) {
    if (newTheme === 'dark') {
      addWhitekColorPagination();
    } else {
      removeWhiteColorPagination();
    }
  }

  function addWhitekColorPagination() {
    for (let i = 0; i < btnPagination.length; i += 1) {
      btnPagination[i].classList.add('tui-page-btn--change-color');
    }
    btnPagNext.classList.add('tui-el-change');
    btnPagLast.classList.add('tui-el-change');
    btnPagPrev.classList.add('tui-el-change');
    btnPagFirst.classList.add('tui-el-change');
    btnPagLastChild.classList.add('tui-el-change');
  }

  function removeWhiteColorPagination() {
    for (let i = 0; i < btnPagination.length; i += 1) {
      btnPagination[i].classList.remove('tui-page-btn--change-color');
    }
    btnPagNext.classList.remove('tui-el-change');
    btnPagLast.classList.remove('tui-el-change');
    btnPagPrev.classList.remove('tui-el-change');
    btnPagFirst.classList.remove('tui-el-change');
    btnPagLastChild.classList.remove('tui-el-change');
  }
}
