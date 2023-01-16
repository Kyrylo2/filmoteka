const refs = {
  search: document.querySelector('#searchForm'),
  filmsMainContainer: document.querySelector('.films__list'),
  backdrop: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal'),
  openModalBtn: document.querySelector('.footer__btn'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modalStudents: document.querySelector('.modal__students'),
  sortForm: document.querySelector('#sortForm'),
};

export const {
  search,
  filmsMainContainer,
  backdrop,
  modal,
  openModalBtn,
  closeModalBtn,
  modalStudents,
  sortForm,
} = refs;
