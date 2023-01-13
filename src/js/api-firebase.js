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
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  startAt,
  serverTimestamp,
} from 'firebase/firestore';

export default class APIFirebase {
  NAME_KEY_STORAGE_WATCHED = 'Filmoteka_List_Watched';
  NAME_KEY_STORAGE_QUEUE = 'Filmoteka_List_Queue';

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

  // * Work from File Store

  saveToWatch(curentFilm) {
    this.saveObject(curentFilm, this.NAME_KEY_STORAGE_WATCHED);
  }

  saveToQueue(curentFilm) {
    this.saveObject(curentFilm, this.NAME_KEY_STORAGE_QUEUE);
  }

  async saveObject(obj, typeInfo) {
    console.log('🚀 ~ saveMessage');
    const messageText = JSON.stringify(obj);

    // Add a new message entry to the Firebase database.
    try {
      await addDoc(collection(getFirestore(), typeInfo), {
        name: this.getUserName(),
        text: messageText,
        profilePicUrl: this.getProfilePicUrl(),
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  loadMessages() {
    // Create the query to load the last 12 messages and listen for new ones.

    const recentMessagesQuery = query(
      collection(getFirestore(), this.NAME_KEY_STORAGE_WATCHED),
      orderBy('timestamp', 'desc'),
      // startAt(1),
      limit(12)
    );

    onSnapshot(recentMessagesQuery, function (snapshot) {
      snapshot.docChanges().forEach(function (change) {
        if (change.type !== 'removed') {
          const message = change.doc.data();
          console.log('message', JSON.parse(message.text));
        }
      });
    });
  }
}

function getLocalStorageText() {
  let saveObject;

  try {
    saveObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    saveObject = localData;
  }

  inputEmail.value = saveObject.email;
  textarea.value = saveObject.message;
}
