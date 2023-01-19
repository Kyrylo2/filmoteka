import throttle from 'lodash.throttle';
import MyLibrary from './movies-library';
import APIFirebase from '../api-firebase';
import { filmsMainContainer } from '../utils/refs';
import { moviesApiService } from './movie-api';

// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// const apiFirebase = new APIFirebase();
// console.log(apiFirebase);

// filmsMainContainer.innerHTML = '<h1>HELLO</h1>';

let myLibrary;
let refs;
let apiFirebase;
function itializeWatchQueue(firebase) {
  // apiFirebase = firebase;
  myLibrary = new MyLibrary();
  myLibrary.apiFirebase = firebase;
  refs = {
    buttonsContainer: document.querySelector('.container-buttons'),
    queueButton: document.querySelector('.queueButton'),
    watchedButton: document.querySelector('.watchedButton'),
    movieContainer: document.querySelector('.films__container'),

    search: document.querySelector('#searchForm'),
    filmsMainContainer: document.querySelector('.films__list'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal'),
    openModalBtn: document.querySelector('.footer__btn'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modalStudents: document.querySelector('.modal__students'),
    sortForm: document.querySelector('#sortForm'),
    paginationContainer: document.querySelector('#tui-pagination-container'),

    gdun: document.querySelector('.gdun'),
  };

  const { modal, backdrop } = refs;

  // console.log(refs.gdun);
  refs.buttonsContainer.addEventListener('click', onButtonsContainerClick);
  filmsMainContainer.addEventListener('click', onContainerClick);
  refs.paginationContainer.style.display = 'none';

  myLibrary.resetAll();

  initializeScrool();

  function onContainerClick(e) {
    e.preventDefault();
    const movieId = e.target.closest('li').getAttribute('data-id');
    moviesApiService.filmId = movieId;
    moviesApiService.getFullInfo(movieId);

    modal.classList.remove('visually-hidden');
    backdrop.classList.toggle('modal-open');
  }

  return myLibrary;
}

async function onButtonsContainerClick(e) {
  const currentTheme = localStorage.getItem('user-theme');
  if (e.target.getAttribute('id') === 'watchedButton') {
    e.target.classList.add('watchedButton--active');
    myLibrary.statusLibrary = 'watched';
    const activeButton = e.currentTarget.querySelector('.queueButton--active');
    if (activeButton) {
      activeButton.classList.remove('queueButton--active');
    }
    myLibrary.resetAll();
    await myLibrary.getWatchedMovies();
    // console.log(myLibrary);
    await myLibrary.renderMovies(currentTheme);
    return;
  }

  if (e.target.getAttribute('id') === 'queueButton') {
    e.target.classList.add('queueButton--active');
    myLibrary.statusLibrary = 'queue';
    const activeButton = e.currentTarget.querySelector(
      '.watchedButton--active'
    );
    if (activeButton) {
      activeButton.classList.remove('watchedButton--active');
    }
    myLibrary.resetAll();
    await myLibrary.getQueueMovies();
    // console.log(myLibrary);
    await myLibrary.renderMovies(currentTheme);
    return;
  }
}

// Infinite scroll
function initializeScrool() {
  window.addEventListener(
    'scroll',
    throttle(() => {
      if (myLibrary.everythingIsLoaded || myLibrary.gdunStatus === 'visible') {
        return;
      }

      if (
        document.documentElement.scrollHeight -
          (window.scrollY + window.innerHeight) <=
        400
      ) {
        myLibrary.page += 1;
        myLibrary.everythingIsLoaded = myLibrary.page >= myLibrary.totalPages;
        myLibrary.scrollRenderMovies();
      }
    }, 400)
  );
}

export { itializeWatchQueue, refs };
