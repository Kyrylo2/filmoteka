import APIFirebase from './api-firebase';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

const NAME_CLASS_NO_SCROOL_BODY = 'no-scroll-body';
const NAME_CLASS_VISUALLY_HIDDEN = 'visually-hidden';

let apiFirebase;
let refs;
let functionSignIn;
let functionSignOut;

function initializeFirebase(data = {}) {
  const { funcSignIn, funcSignOut } = {
    ...{ funcSignIn: null, funcSignOut: null },
    ...data,
  };
  functionSignIn = funcSignIn;
  functionSignOut = funcSignOut;

  apiFirebase = new APIFirebase(visualisationSignElement);
  apiFirebase.closeMenuSignIn = closeMenuSignIn;

  refs = findRefs();

  addEvents();
  return apiFirebase;
}

function findRefs() {
  return {
    signInButtonElement: document.getElementById('signInButton'),
    signOutButtonElement: document.getElementById('signOutButton'),
    signInMenu: document.getElementById('menu_sign_in_new'),
    signInBackdrop: document.getElementById('backdrop_menu_sign_in'),
    btnCloseMenuSignIn: document.querySelector('.close_menu_sign_in'),
    linkToLibrary: document.querySelector('.site-nav__to_library'),
  };
}

// * Add events
function addEvents() {
  // * Open menu
  refs.signInButtonElement.addEventListener('click', openMenuSignIn);
  refs.signInMenu.addEventListener('click', clickWindowSignIn);
  refs.linkToLibrary.addEventListener('click', clickToLibrary);
  refs.linkToLibrary.addEventListener('mousedown', mousedownToLibrary);

  // * Sign Out
  refs.signOutButtonElement.addEventListener(
    'click',
    apiFirebase.signOutUser.bind(apiFirebase)
  );
}

// * Function
function openMenuSignIn() {
  //add Events
  document.addEventListener('keydown', keydownEscCloseMenuSignIn);
  refs.signInBackdrop.addEventListener('click', clickCloseMenuSignIn);
  refs.btnCloseMenuSignIn.addEventListener('mousedown', closeMenuSignIn);

  //disasble scrool
  document.body.classList.add(NAME_CLASS_NO_SCROOL_BODY);

  // show windows
  apiFirebase.ui.start('#firebaseui-auth-container', apiFirebase.getUiConfig());

  refs.signInMenu.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);
  refs.signInBackdrop.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);
}

function keydownEscCloseMenuSignIn(event) {
  if (event.key !== 'Escape') return;

  closeMenuSignIn(event);
}

function clickWindowSignIn(event) {
  event.preventDefault();
}

function clickCloseMenuSignIn(event) {
  if (event.currentTarget === event.target) closeMenuSignIn(event);
}

async function clickToLibrary(event) {
  if (!apiFirebase.isUserSignedIn()) {
    //  console.log('STOP');
    // event.stopPropagation();
    event.preventDefault();
  }

  const dataWatched = await apiFirebase.readWatched();
  const dataQueue = await apiFirebase.readQueue();
  localStorage.setItem(
    'filmotekaToLibrary',
    JSON.stringify({ dataWatched, dataQueue })
  );
}

function closeMenuSignIn(event) {
  //Delete events
  document.removeEventListener('keydown', keydownEscCloseMenuSignIn);
  refs.signInBackdrop.removeEventListener('click', clickCloseMenuSignIn);
  refs.btnCloseMenuSignIn.removeEventListener('click', closeMenuSignIn);

  //Enable scrool
  document.body.classList.remove(NAME_CLASS_NO_SCROOL_BODY);

  //Hide Windows
  refs.signInMenu.classList.add(NAME_CLASS_VISUALLY_HIDDEN);
  refs.signInBackdrop.classList.add(NAME_CLASS_VISUALLY_HIDDEN);
}

function clickToLibrary(event) {
  if (!apiFirebase.isUserSignedIn()) {
    Report.warning('Please sign in to your account', '', 'Okay');
    event.preventDefault();
  }
  // saveToLacalStorage();
}

function mousedownToLibrary() {
  saveToLacalStorage();
}

async function saveToLacalStorage() {
  const dataWatched = await apiFirebase.readWatched();
  const dataQueue = await apiFirebase.readQueue();
  localStorage.setItem(
    'filmotekaToLibrary',
    JSON.stringify({ dataWatched, dataQueue })
  );
}

function visualisationSignElement(user) {
  if (user) {
    // Show  sign-out button.
    refs.signOutButtonElement.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);

    // Hide sign-in button.
    refs.signInButtonElement.classList.add(NAME_CLASS_VISUALLY_HIDDEN);

    runFunction(functionSignIn, user);
  } else {
    // Hide  sign-out button.
    refs.signOutButtonElement.classList.add(NAME_CLASS_VISUALLY_HIDDEN);

    // Show sign-in button.
    refs.signInButtonElement.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);

    runFunction(functionSignOut, user);
  }
}

function runFunction(callBackFunction, user) {
  if (typeof callBackFunction !== 'function') return;
  callBackFunction.call(user);
}

export { initializeFirebase, openMenuSignIn };
