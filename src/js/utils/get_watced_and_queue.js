import throttle from 'lodash.throttle';
import MyLibrary from './movies-library';
// import APIFirebase from '../api-firebase';

// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// const apiFirebase = new APIFirebase();
// console.log(apiFirebase);

const myLibrary = new MyLibrary();

console.log(myLibrary);

const refs = {
  buttonsContainer: document.querySelector('.container-buttons'),
};

refs.buttonsContainer.addEventListener('click', onButtonsContainerClick);

myLibrary.resetAll();
myLibrary.preload();

function onButtonsContainerClick(e) {
  if (e.target.getAttribute('id') === 'watchedButton') {
    myLibrary.resetAll();
    myLibrary.getWatchedMovies();
    console.log(myLibrary);
    myLibrary.renderMovies();
    return;
  }

  if (e.target.getAttribute('id') === 'queueButton') {
    myLibrary.resetAll();
    myLibrary.getQueueMovies();
    console.log(myLibrary);
    myLibrary.renderMovies();
    return;
  }
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
    }
  }, 400)
);
