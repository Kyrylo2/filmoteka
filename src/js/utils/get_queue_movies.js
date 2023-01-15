import { filmsMainContainer } from '../utils/refs';
import MyLibrary from './movies-library';

const myLibrary = new MyLibrary();

async function getQueueMovies() {
  const movieArray = await myLibrary.getQueueMovies();
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

export default getQueueMovies;
