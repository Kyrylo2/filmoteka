import { moviesApiService } from './js/utils/movie-api';
import { renderMovies } from './js/utils/render';
import {
  search,
  filmsMainContainer,
  backdrop,
  modal,
  sortForm,
  modalStudents,
} from './js/utils/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeFirebase } from './js/authentication-firebase';
import { ModalTeamInit } from './js/students';
import validator from 'validator';
import MyLibraryClass from './js/utils/movies-library';
const myLibrarty = new MyLibraryClass();
import Pagination from 'tui-pagination';
//  console.log(myLibrarty);
import btn_up from './js/btn_up';

import { itializeWatchQueue } from './js/utils/get_watced_and_queue';

//* Authentication
// initializeFirebase - можна викликати без параметрів
const apiFirebase = initializeFirebase({
  funcSignIn: onSignIn,
  funcSignOut: onSignOut,
});

//ks
moviesApiService.apiFirebase = apiFirebase;

const myLibrary = getmyLibrary();

function getmyLibrary() {
  if (ifLibrary()) {
    const myLibrary = itializeWatchQueue(apiFirebase);
    return myLibrary;
  }
  return null;
}

async function onSignIn(user) {
  //Оце викличеться, коли користувач авторизується,
  //чи сервер підтрвердить що вже зареєстрований, при оновленні сторінки
  // //  console.log(apiFirebase.isUserSignedIn());
  if (ifLibrary()) {
    myLibrary.preload.call(myLibrary);
  }
}

function onSignOut(user) {
  // Оце викличеться коли користувач вийде з аккаунту
  // //  console.log('onSignOut');
  if (ifLibrary()) {
    //to home
    location.href = './index.html';
  }
}

// Перевірити чи авториований
// майте на увазі, поки сервер не підтвердить авторизацію, то повертатиме false
// Це буде одразу після завантаження сторінки
// apiFirebase.isUserSignedIn()

function ifLibrary() {
  return document.documentURI.includes('my-library.html');
}

if (ifLibrary()) return;

ModalTeamInit();

search.addEventListener('submit', onFormSubmit);

filmsMainContainer.addEventListener('click', onContainerClick);

function onContainerClick(e) {
  e.preventDefault();
  const movieId = e.target.closest('li').getAttribute('data-id');
  moviesApiService.filmId = movieId;
  moviesApiService.getFullInfo(movieId);

  modal.classList.remove('visually-hidden');
  backdrop.classList.toggle('modal-open');
}

async function onFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.searchQuery.value.trim();
  if (!validator.isAlphanumeric(inputValue)) {
    return Notify.failure(
      'Search result not successful. Enter the correct movie name and try again.'
    );
  }
  moviesApiService.query = inputValue;
  clearMarkup();
  moviesApiService.resetPage();
  try {
    const arrOfMovies = await moviesApiService.fetchMovies();

    createMarkup(renderMovies(arrOfMovies));

    document.querySelector(
      'h1'
    ).innerHTML = `Here's what we found by searching for "${
      moviesApiService.query[0].toUpperCase() + moviesApiService.query.slice(1)
    }". You on page - <span>${moviesApiService.page}</span>`;

    document.querySelector('.header__form').reset();

    const pagination = new Pagination(
      'tui-pagination-container',
      moviesApiService.PaginationOptions
    );

    pagination.on('beforeMove', async e => {
      try {
        moviesApiService.page = e.page;
        const arrOfMovies = await moviesApiService.fetchMovies();
        createMarkup(renderMovies(arrOfMovies));

        document.querySelector(
          'h1'
        ).innerHTML = `Here's what we found by searching for "${
          moviesApiService.query[0].toUpperCase() +
          moviesApiService.query.slice(1)
        }". You on page - <span>${moviesApiService.page}</span>`;
      } catch (e) {
        //  console.log(e);
      }
    });
    pagination.on('afterMove', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  } catch (e) {
    Notify.failure('Oups! Something went wrong');
  }
}

// Через функції не працює
function createMarkup(movies) {
  filmsMainContainer.innerHTML = movies;
}

function clearMarkup() {
  filmsMainContainer.innerHTML = '';
}

function closeModal() {
  modal.classList.add('visually-hidden');
  modalStudents.classList.add('visually-hidden');
  backdrop.classList.toggle('modal-open');

  modal.innerHTML = '';
  // Перерендер
  if (document.querySelector('body.my-lib-event')) {
    myLibrary.closeModal();
  }
}

function onBtnClose() {
  closeModal();
  removeAllListeners();
}

export { onBtnClose, onEcsClose, onBackdropClose, removeAllListeners };

function onEcsClose(e) {
  if (e.key === 'Escape') {
    closeModal();
    removeAllListeners();
  }
}

function onBackdropClose(e) {
  //  console.log('onBackdropClose', e);
  //  console.log(e.target.classList);
  if (
    e.target.classList.contains('modal') ||
    e.target.classList.contains('backdrop')
  ) {
    closeModal();
    removeAllListeners();
  }
}

function removeAllListeners() {
  backdrop.removeEventListener('click', onBackdropClose);
  document.body.removeEventListener('keyup', onEcsClose);
  document
    .querySelector('.modal-cross')
    .removeEventListener('click', onBtnClose);
}

moviesApiService.getGenres();

(async () => {
  await moviesApiService.getTrendMovies();
  Notify.success(
    `Cool, we found more than ${moviesApiService.totalItems} films!`
  );
})();

// //  console.log('signOutUser', signOutUser());

// const pagination = new Pagination('tui-pagination-container', options);

function addSortingGenres() {
  const parsedGenres = JSON.parse(localStorage.getItem('genres'));
  const arrOfGenres = [];
  parsedGenres.map(el =>
    arrOfGenres.push(`<option value="${el.id}">${el.name}</option>`)
  );
  // //  console.log(arrOfGenres);
  sortForm.elements.genreSelect.insertAdjacentHTML(
    'beforeend',
    arrOfGenres.join('')
  );
}
addSortingGenres();

function addSortingYears() {
  const minYear = 1999;
  const maxYear = 2022;
  const arrOfYears = [];
  for (let i = maxYear; i - 1 > minYear; i--) {
    arrOfYears.push(`<option value="${i}">${i}</option>`);
  }
  // //  console.log(arrOfYears);
  sortForm.elements.yearSelect.insertAdjacentHTML(
    'beforeend',
    arrOfYears.join('')
  );
}
addSortingYears();

sortForm.addEventListener('submit', onSortFormSubmit);

async function onSortFormSubmit(e) {
  e.preventDefault();
  moviesApiService.resetPage();
  moviesApiService.sortBy = e.currentTarget.elements.sortBy.value;
  moviesApiService.year = e.currentTarget.elements.yearSelect.value;
  moviesApiService.choosedGenres = e.currentTarget.elements.genreSelect.value;
  const resetButton = e.currentTarget.elements.resetBtn;
  resetButton.addEventListener('click', () => {
    //  console.log('qeqeqw');
    moviesApiService.getTrendMovies();
  });

  const ganreName = moviesApiService.choosedGenres
    ? e.currentTarget.elements.genreSelect.options[
        e.currentTarget.elements.genreSelect.selectedIndex
      ].text
    : false;

  // clearMarkup();
  const arrOfMovies = await moviesApiService.getSortedMovies();
  createMarkup(renderMovies(arrOfMovies));

  Notify.success(
    `Cool, we found more than ${moviesApiService.totalItems} films!`
  );

  const pagination = new Pagination(
    'tui-pagination-container',
    moviesApiService.PaginationOptions
  );

  pagination.on('beforeMove', async e => {
    try {
      moviesApiService.page = e.page;
      const arrOfMovies = await moviesApiService.getSortedMovies();
      createMarkup(renderMovies(arrOfMovies));

      document.querySelector(
        'h1'
      ).innerHTML = `Here's what we found by searching ${
        moviesApiService.choosedGenres ? ganreName + ', ' : ''
      }${
        moviesApiService.year ? moviesApiService.year + ' year, ' : ''
      }you on page - <span>${moviesApiService.page}</span>`;
    } catch (e) {
      //  console.log(e);
    }
  });
  pagination.on('afterMove', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  document.querySelector('h1').innerHTML = `Here's what we found by searching ${
    moviesApiService.choosedGenres ? ganreName : ''
  } ${
    moviesApiService.year
      ? `${moviesApiService.choosedGenres ? ', ' : ''}` +
        moviesApiService.year +
        ' year'
      : ''
  }, you on page - <span>${moviesApiService.page}</span>`;
}

import classSwitchTheme from './js/class-switch_theme';
