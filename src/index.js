import { moviesApiService } from './js/utils/movie-api';
import { renderMovies } from './js/utils/render';
import { search, filmsMainContainer } from './js/utils/refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

search.addEventListener('submit', onFormSubmit);

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
