import throttle from 'lodash.throttle';
import MyLibrary from './movies-library';
import getWatchedMovies from './get_watched_movies';
import getQueueMovies from './get_queue_movies';
import preload from './preload';

const myLibrary = new MyLibrary();

const refs = {
  watchedButton: document.getElementById('watchedButton'),
  queueButton: document.getElementById('queueButton'),
};

refs.watchedButton.addEventListener('click', onWatchedButtonClick);
refs.queueButton.addEventListener('click', onQueueButton);

myLibrary.resetAll();

preload();

function onWatchedButtonClick() {
  getWatchedMovies();
}

function onQueueButton() {
  getQueueMovies();
}

// Infinite scroll

window.addEventListener(
  'scroll',
  throttle(() => {
    if (myLibrary.everythingIsLoaded) return;

    if (
      document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight) <=
      400
    ) {
      myLibrary.page += 1;
      myLibrary.everythingIsLoaded = myLibrary.page >= myLibrary.totalPages;
      myLibrary.renderMovies();
      console.log(myLibrary);
    }
  }, 400)
);
