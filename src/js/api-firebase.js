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
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export default class APIFirebase {
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
}
