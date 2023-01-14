import APIFirebase from './api-firebase';

const NAME_CLASS_NO_SCROOL_BODY = 'no-scroll-body';
const NAME_CLASS_VISUALLY_HIDDEN = 'visually-hidden';

let apiFirebase;
let refs;

initializeAuth();

function initializeAuth() {
  apiFirebase = new APIFirebase(visualisationSignElement);

  refs = findRefs();
  addEvents();
  return apiFirebase;
}

function findRefs() {
  return {
    signInButtonElement: document.getElementById('signInButton'),
    signOutButtonElement: document.getElementById('signOutButton'),

    signInMenu: document.getElementById('menu_sign_in'),
    signInGoogleButtonElement: document.getElementById('btn-sign-in-google'),
    signInFacebookButtonElement: document.getElementById(
      'btn-sign-in-facebook'
    ),

    signInBackdrop: document.getElementById('backdrop_menu_sign_in'),
  };
}

// * Add events
function addEvents() {
  // * Open menu
  refs.signInButtonElement.addEventListener('click', openMenuSignIn);

  // * Google Sign In
  refs.signInGoogleButtonElement.addEventListener(
    'click',
    apiFirebase.signInGoogle.bind(apiFirebase)
  );

  // * FaceBook Sign In
  refs.signInFacebookButtonElement.addEventListener(
    'click',
    apiFirebase.signInFacebook.bind(apiFirebase)
  );

  // * Sign Out
  refs.signOutButtonElement.addEventListener(
    'click',
    apiFirebase.signOutUser.bind(apiFirebase)
  );

  refs.signInGoogleButtonElement.addEventListener('click', closeMenuSignIn);
  refs.signInFacebookButtonElement.addEventListener('click', closeMenuSignIn);
}

// * Function
function openMenuSignIn() {
  //add Events
  document.addEventListener('keydown', keydownEscCloseMenuSignIn);
  refs.signInBackdrop.addEventListener('click', clickCloseMenuSignIn);

  //disasble scrool
  document.body.classList.add(NAME_CLASS_NO_SCROOL_BODY);

  // show windows
  refs.signInMenu.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);
  refs.signInBackdrop.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);
}

function keydownEscCloseMenuSignIn(event) {
  if (event.key !== 'Escape') return;

  closeMenuSignIn(event);
}

function clickCloseMenuSignIn(event) {
  closeMenuSignIn(event);
}

function closeMenuSignIn(event) {
  //Delete events
  document.removeEventListener('keydown', keydownEscCloseMenuSignIn);
  refs.signInBackdrop.removeEventListener('click', clickCloseMenuSignIn);

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

    // We save the Firebase Messaging Device token and enable notifications.
    // ! --------------------------------------------
    // saveMessagingDeviceToken();
  } else {
    // Hide  sign-out button.
    refs.signOutButtonElement.classList.add(NAME_CLASS_VISUALLY_HIDDEN);

    // Show sign-in button.
    refs.signInButtonElement.classList.remove(NAME_CLASS_VISUALLY_HIDDEN);
  }
}

export { initializeAuth };
