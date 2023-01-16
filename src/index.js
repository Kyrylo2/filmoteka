import { moviesApiService } from './js/utils/movie-api';
import { renderMovies } from './js/utils/render';
import { search, filmsMainContainer, backdrop, modal } from './js/utils/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeFirebase } from './js/authentication-firebase';
import { ModalTeamInit } from './js/students';
import validator from 'validator';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import btn_up from './js/btn_up';
// import './js/utils/get_watced_and_queue';
import switchTheme from './js/switch_theme';

//* Authentication
// initializeFirebase - можна викликати без параметрів
const apiFirebase = initializeFirebase({
  funcSignIn: onSignIn,
  funcSignOut: onSignOut,
});

//ks
moviesApiService.apiFirebase = apiFirebase;

ModalTeamInit();

function onSignIn(user) {
  //Оце викличеться, коли користувач авторизується,
  //чи сервер підтрвердить що вже зареєстрований, при оновленні сторінки
  // console.log(apiFirebase.isUserSignedIn());
}

function onSignOut(user) {
  // Оце викличеться коли користувач вийде з аккаунту
  // console.log('onSignOut');
}

//Перевірити чи авториований
//майте на увазі, поки сервер не підтвердить авторизацію, то повертатиме false
//Це буде одразу після завантаження сторінки
//apiFirebase.isUserSignedIn()

search.addEventListener('submit', onFormSubmit);

filmsMainContainer.addEventListener('click', onContainerClick);

function onContainerClick(e) {
  e.preventDefault();
  const movieId = e.target.closest('li').getAttribute('data-id');
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
    // if (arrOfMovies.length === 0) {
    //   Notify.failure("Sorry, we haven't found any movie.");
    // }
    createMarkup(renderMovies(arrOfMovies));
    console.log(arrOfMovies);

    const pagination = new Pagination(
      'tui-pagination-container',
      moviesApiService.PaginationOptions
    );

    pagination.on('beforeMove', async e => {
      try {
        moviesApiService.page = e.page;
        const arrOfMovies = await moviesApiService.fetchMovies();
        createMarkup(renderMovies(arrOfMovies));
      } catch (e) {
        console.log(e);
      }
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
  backdrop.classList.toggle('modal-open');
}

function onBtnClose() {
  closeModal();
  removeAllListeners();
}

export { onBtnClose, onEcsClose, onBackdropClose };

function onEcsClose(e) {
  if (e.key === 'Escape') {
    closeModal();
    removeAllListeners();
  }
}

function onBackdropClose(e) {
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
moviesApiService.getTrendMovies();

// console.log('signOutUser', signOutUser());

// const pagination = new Pagination('tui-pagination-container', options);
