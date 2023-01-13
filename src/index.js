import { moviesApiService } from './js/utils/movie-api';
import { renderMovies } from './js/utils/render';
import { search, filmsMainContainer, backdrop, modal } from './js/utils/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import './js/utils/get_watced_and_queue';

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
  moviesApiService.query = e.currentTarget.elements.searchQuery.value;
  clearMarkup();
  moviesApiService.resetPage();
  try {
    const arrOfMovies = await moviesApiService.fetchMovies();
    createMarkup(renderMovies(arrOfMovies));
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

moviesApiService.getGenres();
moviesApiService.getTrendMovies();
