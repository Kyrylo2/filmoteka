import { filmsMainContainer } from '../utils/refs';
import MyLibrary from './movies-library';

const myLibrary = new MyLibrary();

async function getWatchedMovies() {
  myLibrary.resetAll();
  const movieArray = await myLibrary.getWatchedMovies();
  if (movieArray.length === 0) {
    console.log('NO DATA');
    return;
  }
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.calcPagesData();
  filmsMainContainer.innerHTML = '';
  myLibrary.renderMovies();
}

export default getWatchedMovies;
