// import { getFirebaseConfig } from './firebase-config.js';
import { getFirebaseConfig } from './firebase-config';
import { getPerformance } from 'firebase/performance';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  FacebookAuthProvider,
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
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), this.authStateObserver.bind(this));
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

  // * Work from  Cloud Firestore

  // * Work from File Store
  async addToWatched(filmId) {
    return await this.addToStorage(filmId, this.NAME_KEY_STORAGE_WATCHED);
  }

  async addToQueue(filmId) {
    return await this.addToStorage(filmId, this.NAME_KEY_STORAGE_QUEUE);
  }

  async deleteFromWatched(filmId) {
    return await this.deleteFromStorage(filmId, this.NAME_KEY_STORAGE_WATCHED);
  }

  async deleteFromQueue(filmId) {
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
      // console.error('Error writing new message to Firebase Database', error);
    }
  }

  async readData(typeInfo) {
    if (!this.isUserSignedIn()) return [];

    const uid = getAuth().currentUser.uid;

    const db = getFirestore();
    const docRef = doc(db, this.NAME_COLLECTION_FILESTORAGE, typeInfo + uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log('Document data:', docSnap.data().arrFilms);
      return docSnap.data().arrFilms;
    } else {
      // doc.data() will be undefined in this case
      // console.log('No such document!');
      return [];
    }
  }
}
