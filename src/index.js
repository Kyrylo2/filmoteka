import { moviesApiService } from './js/utils/movie-api';
import { renderMovies } from './js/utils/render';
import { search, filmsMainContainer, backdrop, modal } from './js/utils/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeFirebase } from './js/authentication-firebase';
import { options } from './js/pagination';

import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

// import './js/utils/get_watced_and_queue';

//* Authentication
// initializeFirebase - можна викликати без параметрів
const apiFirebase = initializeFirebase({
  funcSignIn: onSignIn,
  funcSignOut: onSignOut,
});

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

backdrop.addEventListener('click', onBackdropClose);

document.body.addEventListener('keyup', onEcsClose);

function onContainerClick(e) {
  e.preventDefault();
  const movieId = e.target.closest('li').getAttribute('data-id');
  moviesApiService.getFullInfo(movieId);
  modal.classList.remove('visually-hidden');
  backdrop.classList.toggle('modal-open');
}

async function onFormSubmit(e) {
  e.preventDefault();
  moviesApiService.query = e.currentTarget.elements.searchQuery.value;
  clearMarkup();
  moviesApiService.resetPage();
  try {
    const arrOfMovies = await moviesApiService.fetchMovies();
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

export { closeModal };

function onEcsClose(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
}

function onBackdropClose(e) {
  if (
    e.target.classList.contains('modal') ||
    e.target.classList.contains('backdrop')
  ) {
    closeModal();
  }
}

moviesApiService.getGenres();
moviesApiService.getTrendMovies();

// console.log('signOutUser', signOutUser());

// const pagination = new Pagination('tui-pagination-container', options);

