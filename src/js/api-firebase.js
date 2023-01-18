// import { getFirebaseConfig } from './firebase-config.js';
import { getFirebaseConfig } from './firebase-config';
import { getPerformance } from 'firebase/performance';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  serverTimestamp,
} from 'firebase/firestore';

const firebaseui = require('firebaseui');

import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ! додають filmId у відповідне сховище, якщо операція не вдалася то повертає false
// async addToWatched(filmId)
// async addToQueue(filmId)
//
// ! ВИдаляють filmId з відповідного сховища, якщо операція не вдалася то повертає false
// async deleteFromWatched(filmId)
// async deleteFromQueue(filmId)
//
// ! Повертають масив ВСІХ філмів з відповідного сховища, якщо якась помилка,
//то оповерне пустий масив(наприклад користувач не авторизований)
// async readWatched()
// async readQueue()
//
// ! Перевіряє чи є filmId у відповідному сховищі, true - false
// async isSavedFromWatched(filmId)
// async isSavedFromQueue(filmId)
//
// ! Перевіряє чи авторизовані ви
// isUserSignedIn()
export default class APIFirebase {
  NAME_KEY_STORAGE_WATCHED = 'Filmoteka_Watched_';
  NAME_KEY_STORAGE_QUEUE = 'Filmoteka_Queue';
  NAME_COLLECTION_FILESTORAGE = 'Storage_Filmoteka';

  constructor(authStateObserver) {
    this.authStateObserver = authStateObserver;
    const firebaseApp = initializeApp(getFirebaseConfig());
    getPerformance();
    this.initFirebaseAuth();
    if (authStateObserver) {
      this.ui = new firebaseui.auth.AuthUI(getAuth());
    }
  }

  // Signs-in Friendly Chat.
  async signInGoogle() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    const provider = new GoogleAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  async signInFacebook() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    // const provider = new GoogleAuthProvider();
    const provider = new FacebookAuthProvider();
    await signInWithPopup(getAuth(), provider);
  }

  // Signs-out of Friendly Chat.
  signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
  }

  // Initialize firebase auth
  initFirebaseAuth() {
    if (!this.authStateObserver) {
      this.authStateObserver = this.authStateObserver_;
    }
    // Listen to auth state changes.

    onAuthStateChanged(getAuth(), this.authStateObserver.bind(this));
  }

  authStateObserver_() {
    //
  }

  // Returns the signed-in user's profile Pic URL.
  getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
  }

  // Returns the signed-in user's display name.
  getUserName() {
    return getAuth().currentUser.displayName;
  }

  // Returns true if a user is signed-in.
  isUserSignedIn() {
    return !!getAuth().currentUser;
  }

  // Adds a size to Google Profile pics URLs.
  addSizeToGoogleProfilePic(url) {
    if (
      url.indexOf('googleusercontent.com') !== -1 &&
      url.indexOf('?') === -1
    ) {
      return url + '?sz=150';
    }
    return url;
  }

  getUiConfig() {
    return {
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          // this.closeMenuSignIn();

          return true;
        },
        uiShown: function () {
          // The widget is rendered.
          // Hide the loader.
          document.getElementById('loader').style.display = 'none';
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: './index.html',

      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        GoogleAuthProvider.PROVIDER_ID,
        // FacebookAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      //tosUrl: '<your-tos-url>',
      // Privacy policy url.
    };
  }
  // * Work from  Cloud Firestore

  // * Work from File Store
  async addToWatched(filmId, filmName) {
    Notify.success(`${filmName} was successfully added to watched list!`);
    return await this.addToStorage(filmId, this.NAME_KEY_STORAGE_WATCHED);
  }

  async addToQueue(filmId, filmName) {
    Notify.success(`${filmName} was successfully added to queue list!`);
    //  console.log('ФУНКЦІЯ ADD TO QUEUE');
    return await this.addToStorage(filmId, this.NAME_KEY_STORAGE_QUEUE);
  }

  async deleteFromWatched(filmId, filmName) {
    Notify.info(`${filmName} was successfully removed from watched list!`);

    return await this.deleteFromStorage(filmId, this.NAME_KEY_STORAGE_WATCHED);
  }

  async deleteFromQueue(filmId, filmName) {
    Notify.info(`${filmName} was successfully removed from queue list!`);

    return await this.deleteFromStorage(filmId, this.NAME_KEY_STORAGE_QUEUE);
  }

  readWatched() {
    return this.readStorage(this.NAME_KEY_STORAGE_WATCHED);
  }

  readQueue() {
    return this.readStorage(this.NAME_KEY_STORAGE_QUEUE);
  }

  isSavedFromWatched(filmId) {
    return this.isSavedFromStarage(filmId, this.NAME_KEY_STORAGE_WATCHED);
  }

  isSavedFromQueue(filmId) {
    return this.isSavedFromStarage(filmId, this.NAME_KEY_STORAGE_QUEUE);
  }

  // !Storage..
  async addToStorage(filmId, typeStorage) {
    const arrFilm = await this.readData(typeStorage);

    if (arrFilm.includes(filmId)) {
      return true;
    } else {
      arrFilm.push(filmId);
      try {
        await this.saveObjectSet(arrFilm, typeStorage);
      } catch {
        return false;
      }
    }
    return true;
  }

  async deleteFromStorage(filmId, typeStorage) {
    const arrFilm = await this.readData(typeStorage);
    const index = arrFilm.indexOf(filmId);
    if (index === -1) {
      return true;
    } else {
      arrFilm.splice(index, 1);

      try {
        await this.saveObjectSet(arrFilm, typeStorage);
      } catch {
        return false;
      }
    }
    return true;
  }

  async readStorage(typeStorage) {
    const arr = [];
    if (!this.isUserSignedIn()) {
      return arr;
    } else {
      const allListStorage = await this.readData(typeStorage);
      return allListStorage;
    }
  }

  async isSavedFromStarage(filmId, typeStorage) {
    const arr = await this.readData(typeStorage);

    return arr.includes(filmId);
  }

  // * -----------------------------------------------------------------------
  async saveObjectSet(obj, typeInfo) {
    if (!this.isUserSignedIn()) throw 'No autenteficate';

    const uid = getAuth().currentUser.uid;

    const db = getFirestore();
    const docRef = doc(db, this.NAME_COLLECTION_FILESTORAGE, typeInfo + uid);
    const data = {
      name: this.getUserName(),
      timestamp: serverTimestamp(),
      arrFilms: obj,
    };

    // Add a new message entry to the Firebase database.
    try {
      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }

  async readData(typeInfo) {
    if (!this.isUserSignedIn()) return [];

    const uid = getAuth().currentUser.uid;

    const db = getFirestore();
    const docRef = doc(db, this.NAME_COLLECTION_FILESTORAGE, typeInfo + uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().arrFilms;
    } else {
      return [];
    }
  }
}
