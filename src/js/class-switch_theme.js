import { doc } from '@firebase/firestore';

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
  footer: document.querySelector('footer'),
  footerText: document.querySelectorAll(
    '.footer__item, .footer__btn, .main-section-title, .modal-title'
  ),
  modalStudent: document.querySelectorAll(
    '.modal__students, .menu_sign_in_new'
  ),
  studentsMember: document.querySelectorAll('.students-member'),
};
console.log(refs.studentsMember);
export default class SwitchTheme {
  constructor() {
    this.saveUserTheme = localStorage.getItem('user-theme');
    this.getThemeFromSystem();
    this.saveThemeToLocalStorage();
    this.setThemeClass();
    this.userTheme = null;

    this.currentTheme;
    this.newTheme;
  }

  saveThemeToLocalStorage() {
    if (this.saveUserTheme === 'dark') {
      this.check();
      //   console.log('функція saveThemeToLocalStorage');
      this.addAllNameFilmsWhiteColor();
      this.addWhiteColorPagination();
      this.addFooterBlackColor();
      this.addFooterWhiteTextColor();
      this.addOurTeamBlackColor();
      this.addStudentListBlackColor();
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
      localStorage.setItem('user-theme', 'dark');
      this.check();
      this.findRefsFilmsName();
      this.addAllNameFilmsWhiteColor();
      this.addWhiteColorPagination();
      this.addFooterBlackColor();
      this.addFooterWhiteTextColor();
      this.addOurTeamBlackColor();
      this.addStudentListBlackColor();
    }
    if (this.saveUserTheme === 'light') {
      localStorage.setItem('user-theme', 'light');
      this.userTheme = '';
      this.uncheck();
      this.removeAllNameFilmsWhiteColor();
      this.removeWhiteColorPagination();
      this.removeFooterBlackColor();
      this.removeFooterWhiteTextColor();
      this.removeOurTeamBlackColor();
      this.removeStudentListBlackColor();
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
    if (this.saveUserTheme) {
      refs.htmlBlock.classList.add(this.saveUserTheme);
      refs.resetButton.classList.add('active');
    } else {
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
    } else if (this.currentTheme === 'dark') {
      this.newTheme = 'light';
    }
    // console.log(this.newTheme);
    //
    // тут функція зміни
    this.changeAllTextColor(this.newTheme);
    this.changePaginationColor(this.newTheme);
    this.changeFooterBgColor(this.newTheme);
    this.changeFooterTextColor(this.newTheme);
    this.changeOurTeamBgColor(this.newTheme);
    this.changeStudentListBgColor(this.newTheme);
    refs.htmlBlock.classList.remove(this.currentTheme);
    refs.htmlBlock.classList.add(this.newTheme);
    saveTheme ? localStorage.setItem('user-theme', this.newTheme) : null;
  }

  changeAllTextColor(newTheme) {
    if (newTheme === 'dark') {
      this.addAllNameFilmsWhiteColor();
      //   console.log('newTheme - dark call addWhiteColor');
    } else {
      this.removeAllNameFilmsWhiteColor();
      //   console.log('newTheme - light call removeWhiteColor');
    }
  }
  addAllNameFilmsWhiteColor() {
    for (let i = 0; i < refs.allFilmsNameText.length; i += 1) {
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
      this.addWhiteColorPagination();
    } else {
      this.removeWhiteColorPagination();
    }
  }

  addWhiteColorPagination() {
    refs.paginationBox.classList.add('tui-pagination--change');
  }

  removeWhiteColorPagination() {
    refs.paginationBox.classList.remove('tui-pagination--change');
  }
  changeFooterBgColor(newTheme) {
    if (newTheme === 'dark') {
      this.addFooterBlackColor();
    } else {
      this.removeFooterBlackColor();
    }
  }
  addFooterBlackColor() {
    refs.footer.classList.add('footer-black');
  }
  removeFooterBlackColor() {
    refs.footer.classList.remove('footer-black');
  }
  changeFooterTextColor(newTheme) {
    if (newTheme === 'dark') {
      this.addFooterWhiteTextColor();
    } else {
      this.removeFooterWhiteTextColor();
    }
  }
  addFooterWhiteTextColor() {
    for (let i = 0; i < refs.footerText.length; i += 1) {
      refs.footerText[i].classList.add('text-white');
    }
  }
  removeFooterWhiteTextColor() {
    for (let i = 0; i < refs.footerText.length; i += 1) {
      refs.footerText[i].classList.remove('text-white');
    }
  }
  //   модалка наша команда
  changeOurTeamBgColor(newTheme) {
    if (newTheme === 'dark') {
      this.addOurTeamBlackColor();
    } else {
      this.removeOurTeamBlackColor();
    }
  }
  addOurTeamBlackColor() {
    for (let i = 0; i < refs.modalStudent.length; i += 1) {
      refs.modalStudent[i].classList.add('background-black');
    }
  }
  removeOurTeamBlackColor() {
    for (let i = 0; i < refs.modalStudent.length; i += 1) {
      refs.modalStudent[i].classList.remove('background-black');
    }
  }
  changeStudentListBgColor(newTheme) {
    if (newTheme === 'dark') {
      this.addStudentListBlackColor();
    } else {
      this.removeStudentListBlackColor();
    }
  }
  addStudentListBlackColor() {
    for (let i = 0; i < refs.studentsMember.length; i += 1) {
      refs.studentsMember[i].classList.add(
        'student_list_change_color',
        'student_list_change-text'
      );
    }
  }
  removeStudentListBlackColor() {
    for (let i = 0; i < refs.studentsMember.length; i += 1) {
      refs.studentsMember[i].classList.remove(
        'student_list_change_color',
        'student_list_change-text'
      );
    }
  }
}
const test = new SwitchTheme();

refs.themeButton.addEventListener('change', test.onClickThemeButton.bind(test));
refs.resetButton.addEventListener('click', test.onClickResetButton.bind(test));
