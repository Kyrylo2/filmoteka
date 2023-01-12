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

  constructor(refs) {
    this.userPicElement = refs.userPicElement;
    this.userNameElement = refs.userNameElement;
    this.signInButtonElement = refs.signInButtonElement;
    this.signOutButtonElement = refs.signOutButtonElement;

    const firebaseApp = initializeApp(getFirebaseConfig());
    getPerformance();
    this.initFirebaseAuth();
  }

  // Signs-in Friendly Chat.
  async signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    // const provider = new GoogleAuthProvider();
    const provider = new FacebookAuthProvider();
    //const provider = new EmailAuthProvider();
    await signInWithPopup(getAuth(), provider);
    // await signInWithEmailAndPassword(getAuth(), email, password);
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

  authStateObserver(user) {
    if (user) {
      // User is signed in!
      // Get the signed-in user's profile pic and name.
      const profilePicUrl = this.getProfilePicUrl();
      const userName = this.getUserName();

      // Set the user's profile pic and name.
      this.userPicElement.style.backgroundImage =
        'url(' + this.addSizeToGoogleProfilePic(profilePicUrl) + ')';
      this.userNameElement.textContent = userName;

      // Show user's profile and sign-out button.
      this.userNameElement.removeAttribute('hidden');
      this.userPicElement.removeAttribute('hidden');
      this.signOutButtonElement.removeAttribute('hidden');

      // Hide sign-in button.
      this.signInButtonElement.setAttribute('hidden', 'true');

      // We save the Firebase Messaging Device token and enable notifications.
      // ! --------------------------------------------
      //TODO
      // saveMessagingDeviceToken();
    } else {
      // User is signed out!
      // Hide user's profile and sign-out button.
      this.userNameElement.setAttribute('hidden', 'true');
      this.userPicElement.setAttribute('hidden', 'true');
      this.signOutButtonElement.setAttribute('hidden', 'true');

      // Show sign-in button.
      this.signInButtonElement.removeAttribute('hidden');
    }
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
