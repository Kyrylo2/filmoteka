import APIFirebase from './api-firebase';

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
  };
}

// * Add events
function addEvents() {
  // * Open menu
  refs.signInButtonElement.addEventListener('click', openMenuSignIn);
  refs.signInMenu.addEventListener('click', clickWindowSignIn);

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
  refs.btnCloseMenuSignIn.addEventListener('click', closeMenuSignIn);

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
  console.log('clickWindowSignIn');
}

function clickCloseMenuSignIn(event) {
  if (event.currentTarget === event.target) closeMenuSignIn(event);
}

function closeMenuSignIn(event) {
  console.log('CLOSE');

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
