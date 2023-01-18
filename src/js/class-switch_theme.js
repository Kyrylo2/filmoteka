const refs = {
  htmlBlock: document.documentElement,
  saveUserTheme: localStorage.getItem('user-theme'),
  allFilmsNameText: document.querySelectorAll('.films__info p:first-child'),
  btnPagination: document.querySelectorAll('.tui-pagination .tui-page-btn'),
  btnPagNext: document.querySelector('.tui-next'),
  btnPagLast: document.querySelector('.tui-last'),
  btnPagPrev: document.querySelector('.tui-prev'),
  btnPagFirst: document.querySelector('.tui-first'),
  btnPagLastChild: document.querySelector('.tui-last-child'),
  themeButton: document.querySelector('.switch_theme'),
  resetButton: document.querySelector('.reset_theme'),
  paginationBox: document.querySelector('.tui-pagination'),
};

export default class SwitchTheme {
  constructor() {
    this.saveUserTheme = localStorage.getItem('user-theme');
    this.getThemeFromSystem();
    this.saveThemeToLocalStorage();
    this.setThemeClass();
    this.userTheme = null;

    this.log();
    this.currentTheme;
    this.newTheme;
    this.isDarkTheme;
  }
  log() {
    console.log(
      `значення локал сторейдж this.saveUserTheme, ${this.saveUserTheme}`
    );
  }
  saveThemeToLocalStorage() {
    if (this.saveUserTheme === 'dark') {
      this.isDarkTheme = true;
      this.check();
      //   console.log('функція saveThemeToLocalStorage');
      this.addAllNameFilmsWhiteColor();
      this.addWhitekColorPagination();
    }
  }
  check() {
    document.getElementById('checkbox').checked = true;
  }
  uncheck() {
    document.getElementById('checkbox').checked = false;
  }
  getThemeFromSystem() {
    if (window.matchMedia) {
      this.userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    if (this.userTheme === 'dark') {
      this.isDarkTheme = true;
      localStorage.setItem('user-theme', 'dark');
      this.check();
      this.findRefsFilmsName();
      this.addAllNameFilmsWhiteColor();
      this.addWhitekColorPagination();
    }
    if (this.saveUserTheme === 'light') {
      this.isDarkTheme = false;
      localStorage.setItem('user-theme', 'light');
      this.userTheme = '';
      this.uncheck();
      this.removeAllNameFilmsWhiteColor();
      this.removeWhiteColorPagination();
    }

    window
      .matchMedia('(prefers-color-scheme:dark)')
      .addEventListener('change', e => {
        !this.saveUserTheme ? changeTheme() : null;
      });
  }

  onClickThemeButton() {
    this.changeTheme(true);
  }
  onClickResetButton() {
    localStorage.setItem('user-theme', '');
  }

  setThemeClass() {
    console.log('test work');
    if (this.saveUserTheme) {
      console.log('setThemeClass - true');
      refs.htmlBlock.classList.add(this.saveUserTheme);
      refs.resetButton.classList.add('active');
    } else {
      console.log('setThemeClass -false');

      refs.htmlBlock.classList.add(this.userTheme);
    }
  }

  findRefsFilmsName() {
    refs.allFilmsNameText = document.querySelectorAll(
      '.films__info p:first-child'
    );
  }

  changeTheme(saveTheme = false) {
    this.findRefsFilmsName();
    this.currentTheme = refs.htmlBlock.classList.contains('light')
      ? 'light'
      : 'dark';

    if (this.currentTheme === 'light') {
      this.newTheme = 'dark';
      this.isDarkTheme = true;
    } else if (this.currentTheme === 'dark') {
      this.newTheme = 'light';
      this.isDarkTheme = false;
    }
    console.log(this.newTheme);
    console.log(this.isDarkTheme);
    // тут функція зміни
    this.changeAllTextColor(this.newTheme);
    this.changePaginationColor(this.newTheme);
    refs.htmlBlock.classList.remove(this.currentTheme);
    refs.htmlBlock.classList.add(this.newTheme);
    saveTheme ? localStorage.setItem('user-theme', this.newTheme) : null;
  }

  changeAllTextColor(newTheme) {
    console.log(newTheme);
    if (newTheme === 'dark') {
      this.isDarkTheme = true;
      this.addAllNameFilmsWhiteColor();
      console.log('newTheme - dark call addWhiteColor');
    } else {
      this.isDarkTheme = false;
      this.removeAllNameFilmsWhiteColor();
      console.log('newTheme - light call removeWhiteColor');
    }
  }
  addAllNameFilmsWhiteColor() {
    console.log(refs.allFilmsNameText.length);
    for (let i = 0; i < refs.allFilmsNameText.length; i += 1) {
      console.log('work function addAllNameFilmsWhiteColor ');
      refs.allFilmsNameText[i].classList.add('films__name--color');
    }
  }
  removeAllNameFilmsWhiteColor() {
    for (let i = 0; i < refs.allFilmsNameText.length; i += 1) {
      refs.allFilmsNameText[i].classList.remove('films__name--color');
    }
  }

  changePaginationColor(newTheme) {
    if (newTheme === 'dark') {
      this.isDarkTheme = true;
      this.addWhitekColorPagination();
    } else {
      this.isDarkTheme = false;
      this.removeWhiteColorPagination();
    }
  }

  addWhitekColorPagination() {
    refs.paginationBox.classList.add('tui-pagination--change');
  }

  removeWhiteColorPagination() {
    refs.paginationBox.classList.remove('tui-pagination--change');
  }
}
const test = new SwitchTheme();

refs.themeButton.addEventListener('change', test.onClickThemeButton.bind(test));
refs.resetButton.addEventListener('click', test.onClickResetButton.bind(test));
