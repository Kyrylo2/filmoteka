import { moviesApiService } from './js/utils/movie-api';
import { renderMovies } from './js/utils/render';
import { search, filmsMainContainer } from './js/utils/refs';

search.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  moviesApiService.query = e.currentTarget.elements.searchQuery.value;
  clearMarkup();
  moviesApiService.resetPage();
  try {
    const arrOfMovies = await moviesApiService.fetchMovies();
    createMarkup(renderMovies(arrOfMovies));
  } catch (error) {
    console.log(error);
  }
}

function createMarkup(movies) {
  filmsMainContainer.insertAdjacentHTML('beforeend', movies);
}

function clearMarkup() {
  filmsMainContainer.innerHTML = '';
}

moviesApiService.getGenres();
moviesApiService.getTrendMovies();
