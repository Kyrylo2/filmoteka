import throttle from 'lodash.throttle';
import MyLibrary from './movies-library';
import APIFirebase from '../api-firebase';

// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// const apiFirebase = new APIFirebase();
// console.log(apiFirebase);

let myLibrary;
let refs;
let apiFirebase;
function itializeWatchQueue(firebase) {
  // apiFirebase = firebase;
  myLibrary = new MyLibrary();
  myLibrary.apiFirebase = firebase;
  refs = {
    buttonsContainer: document.querySelector('.container-buttons'),
    queueButton: document.querySelector('.queueButton'),
    watchedButton: document.querySelector('.watchedButton'),
  };

  refs.buttonsContainer.addEventListener('click', onButtonsContainerClick);

  myLibrary.resetAll();

  initializeScrool();

  return myLibrary;
}

async function onButtonsContainerClick(e) {
  if (e.target.getAttribute('id') === 'watchedButton') {
    e.target.classList.add('watchedButton--active');
    const activeButton = e.currentTarget.querySelector('.queueButton--active');
    if (activeButton) {
      activeButton.classList.remove('queueButton--active');
    }
    myLibrary.resetAll();
    await myLibrary.getWatchedMovies();
    console.log(myLibrary);
    await myLibrary.renderMovies();
    return;
  }

  if (e.target.getAttribute('id') === 'queueButton') {
    e.target.classList.add('queueButton--active');
    const activeButton = e.currentTarget.querySelector(
      '.watchedButton--active'
    );
    if (activeButton) {
      activeButton.classList.remove('watchedButton--active');
    }
    myLibrary.resetAll();
    await myLibrary.getQueueMovies();
    console.log(myLibrary);
    await myLibrary.renderMovies();
    return;
  }
}

// Infinite scroll
function initializeScrool() {
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
}

export { itializeWatchQueue, refs };
