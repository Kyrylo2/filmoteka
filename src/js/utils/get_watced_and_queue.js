import throttle from 'lodash.throttle';
import MyLibrary from './movies-library';
import APIFirebase from '../api-firebase';

// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// const apiFirebase = new APIFirebase();
// console.log(apiFirebase);

let myLibrary;
let refs;
let apiFirebase;
async function itializeWatchQueue(firebase) {
  // apiFirebase = firebase;

  console.log(apiFirebase.isUserSignedIn());
  const arrLib = await apiFirebase.readWatched();
  console.log('readWatched', arrLib);

  myLibrary = new MyLibrary();
  myLibrary.apiFirebase = firebase;
  refs = {
    buttonsContainer: document.querySelector('.container-buttons'),
  };
  refs.buttonsContainer.addEventListener('click', onButtonsContainerClick);
  myLibrary.resetAll();
  myLibrary.preload();

  initializeScrool();
}

async function onButtonsContainerClick(e) {
  if (e.target.getAttribute('id') === 'watchedButton') {
    // const arrLib = await apiFirebase.readWatched();
    // console.log('readWatched', arrLib);

    myLibrary.resetAll();
    myLibrary.getWatchedMovies();
    console.log(myLibrary);
    myLibrary.renderMovies();
    return;
  }

  if (e.target.getAttribute('id') === 'queueButton') {
    // const arrLib = await apiFirebase.readQueue();
    // console.log('readQueue', arrLib);
    myLibrary.resetAll();
    myLibrary.getQueueMovies();
    console.log(myLibrary);
    myLibrary.renderMovies();
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

export { itializeWatchQueue };
