import APIFirebase from './apiFirebase';

const refs = {
  userPicElement: document.getElementById('user-pic'),
  userNameElement: document.getElementById('user-name'),
  signInButtonElement: document.getElementById('sign-in'),
  signOutButtonElement: document.getElementById('sign-out'),
  btnLoadData: document.querySelector('.btn--firebase-load-data'),
};

const apiFirebase = new APIFirebase(refs);

refs.signOutButtonElement.addEventListener(
  'click',
  apiFirebase.signOutUser.bind(apiFirebase)
);
refs.signInButtonElement.addEventListener(
  'click',
  apiFirebase.signIn.bind(apiFirebase)
);

refs.btnLoadData.addEventListener('click', loadData);

function loadData() {
  if (apiFirebase.isUserSignedIn()) {
    apiFirebase.loadMessages();
  }
}
