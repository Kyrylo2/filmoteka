import MyLibrary from './movies-library';

const myLibrary = new MyLibrary();

async function preload() {
  let movieArray = await myLibrary.getQueueMovies();

  if (movieArray.length === 0) {
    movieArray = await myLibrary.getWatchedMovies();
  }

  if (movieArray.length === 0) {
    myLibrary.renderDefault();
    return;
  }
  myLibrary.reverseArray();
  myLibrary.calcTotalPages();
  myLibrary.calcPagesData();
  myLibrary.renderMovies();
}

export default preload;
