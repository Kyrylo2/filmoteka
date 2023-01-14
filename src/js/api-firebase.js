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
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  startAt,
  serverTimestamp,
} from 'firebase/firestore';

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

  // ! Cloud Firestore

  // * Work from File Store
  async addToWatched(filmId) {
    let arrFilm = await this.readData(this.NAME_KEY_STORAGE_WATCHED);

    if (!arrFilm) arrFilm = [];

    arrFilm.push(filmId);

    await this.saveObjectSet(arrFilm, this.NAME_KEY_STORAGE_WATCHED);
  }

  readWatched() {
    this.readData(this.NAME_KEY_STORAGE_WATCHED);
  }

  isSavedFilmFromWatched() {
    return false;
  }

  async saveObjectSet(obj, typeInfo) {
    if (!this.isUserSignedIn()) return;

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
      console.log('Doc wrote');
    } catch (error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  async readData(typeInfo) {
    if (!this.isUserSignedIn()) return;

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
