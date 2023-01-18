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
};

export default class SwitchTheme {
  constructor() {
    this.saveUserTheme = localStorage.getItem('user-theme');
    this.getThemeFromSystem();
    this.setThemeClass();
    this.userTheme = null;

    this.log();
    this.currentTheme;
    this.newTheme;
  }
  log() {
    console.log(
      `значення локал сторейдж this.saveUserTheme, ${this.saveUserTheme}`
    );
  }
  saveThemeToLocalStorage() {
    if (this.saveUserTheme === 'dark') {
      this.check();
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
      this.check();
      console.log('this.userTheme === dark');
      this.addAllNameFilmsWhiteColor();
      this.addWhitekColorPagination();
    }
    if (this.saveUserTheme === 'light') {
      this.userTheme = '';
      this.uncheck();
      console.log('this.saveUserTheme === light');
      this.removeAllNameFilmsWhiteColor();
      this.removeWhiteColorPagination();
    }

    window
      .matchMedia('(prefers-color-scheme:dark)')
      .addEventListener('change', e => {
        !this.saveUserTheme ? changeTheme() : null;
      });
  }
  teste() {
    console.log('qeqeqeqe');
  }

  onClickThemeButton() {
    console.log('клік по кнопці через клас');
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

  changeTheme(saveTheme = false) {
    this.currentTheme = refs.htmlBlock.classList.contains('light')
      ? 'light'
      : 'dark';

    if (this.currentTheme === 'light') {
      this.newTheme = 'dark';
    } else if (this.currentTheme === 'dark') {
      this.newTheme = 'light';
    }
    console.log(this.newTheme);

    this.changeAllTextColor(this.newTheme);
    this.changePaginationColor(this.newTheme);
    refs.htmlBlock.classList.remove(this.currentTheme);
    refs.htmlBlock.classList.add(this.newTheme);
    saveTheme ? localStorage.setItem('user-theme', this.newTheme) : null;
  }

  changeAllTextColor(newTheme) {
    console.log(newTheme);
    if (newTheme === 'dark') {
      this.addAllNameFilmsWhiteColor();
      console.log('newTheme - dark call addWhiteColor');
    } else {
      this.removeAllNameFilmsWhiteColor();
      console.log('newTheme - light call removeWhiteColor');
    }
  }
  addAllNameFilmsWhiteColor() {
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
      this.addWhitekColorPagination();
    } else {
      this.removeWhiteColorPagination();
    }
  }

  addWhitekColorPagination() {
    for (let i = 0; i < refs.btnPagination.length; i += 1) {
      refs.btnPagination[i].classList.add('tui-page-btn--change-color');
    }
    // refs.btnPagNext.classList.add('tui-el-change');
    // refs.btnPagLast.classList.add('tui-el-change');
    // refs.btnPagPrev.classList.add('tui-el-change');
    // refs.btnPagFirst.classList.add('tui-el-change');
    // refs.btnPagLastChild.classList.add('tui-el-change');
  }

  removeWhiteColorPagination() {
    for (let i = 0; i < refs.btnPagination.length; i += 1) {
      refs.btnPagination[i].classList.remove('tui-page-btn--change-color');
    }
    // refs.btnPagNext.classList.remove('tui-el-change');
    // refs.btnPagLast.classList.remove('tui-el-change');
    // refs.btnPagPrev.classList.remove('tui-el-change');
    // refs.btnPagFirst.classList.remove('tui-el-change');
    // refs.btnPagLastChild.classList.remove('tui-el-change');
  }
}
const test = new SwitchTheme();

refs.themeButton.addEventListener('change', test.onClickThemeButton.bind(test));
refs.resetButton.addEventListener('click', test.onClickResetButton.bind(test));
