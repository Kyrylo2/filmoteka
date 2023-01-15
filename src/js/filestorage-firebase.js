import { getFirebaseConfig } from './firebase-config';
import { getPerformance } from 'firebase/performance';
import { initializeApp } from 'firebase/app';
import { refs } from './utils/refs';

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

import { getAuth } from 'firebase/auth';

const refs = {
  btnAddToWatch: document.querySelector('#btn-add-to-watch'),
  btnAddToQueue: document.querySelector('#btn-add-to-queue'),
};

const firebaseApp = initializeApp(getFirebaseConfig());
const NAME_KEY_STORAGE_WATCHED = 'Filmoteka_List_Watched';
const NAME_KEY_STORAGE_QUEUE = 'Filmoteka_List_Queue';
const NAME_COLLECTION_FILESTORAGE = 'Storage_Filmoteka';

function getUserName() {
  return getAuth().currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
  return !!getAuth().currentUser;
}

// * Work from File Store
function saveWatched(arr) {
  saveObjectSet(arr, NAME_KEY_STORAGE_WATCHED);
}
function saveQUEUE(arr) {
  saveObjectSet(arr, NAME_KEY_STORAGE_QUEUE);
}

async function readWatched() {
  return await readData(NAME_KEY_STORAGE_WATCHED);
}

async function readQUEUE() {
  return await readData(NAME_KEY_STORAGE_QUEUE);
}

async function saveObjectSet(arr, typeInfo) {
  if (!isUserSignedIn()) return;

  // const messageText = JSON.stringify(obj);
  const db = getFirestore();
  const docRef = doc(db, NAME_COLLECTION_FILESTORAGE, typeInfo);
  const data = {
    name: getUserName(),
    timestamp: serverTimestamp(),
    filmId: arr,
  };

  // Add a new message entry to the Firebase database.
  try {
    await setDoc(docRef, data);
    console.log('Doc wrote');
  } catch (error) {
    console.error('Error writing new message to Firebase Database', error);
  }
}

async function readData(typeInfo) {
  if (!isUserSignedIn()) return;

  const db = getFirestore();
  const docRef = doc(db, NAME_COLLECTION_FILESTORAGE, typeInfo);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data().filmId);
    return docSnap.data().filmId;
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
}

// refs.btnAddToWatch.addEventListener('click', onBtnToWatchClick);
// function onBtnToWatchClick() {
//   console.log('click add');
// }

// додає фільми в переглянуті
// async function addIdFilmToWatch(id) {
//   const arrToWatch = await readWatched();
//   console.log(arrToWatch);
//   if (await arrToWatch.includes(id)) {
//     return;
//   } else {
//     arrToWatch.push(id);
//     console.log(arrToWatch);
//     saveWatched(arrToWatch);
//   }
// }
// addIdFilmToWatch(4444);

// додає в чергу
// async function addIdFilmToQUEUE(id) {
//   const arrToQUEUE = await readQUEUE();
//   console.log(arrToQUEUE);
//   if (await arrToQUEUE.includes(id)) {
//     return;
//   } else {
//     arrToQUEUE.push(id);
//     console.log(arrToQUEUE);
//     saveQUEUE(arrToQUEUE);
//   }
// }
// addIdFilmToQUEUE(1111);

// видаляє з переглянутих

// async function deleteFromWatched(id) {
//   const arrWatched = await readWatched();
//   console.log(arrWatched);
//   const index = arrWatched.indexOf(id);
//   if ((await index) === -1) {
//     return;
//   } else {
//     arrWatched.splice(index, 1);
//     console.log(arrWatched);
//     saveWatched(arrWatched);
//   }
// }
// deleteFromWatched(15);

// видаляє з черги
// async function deleteFromQUEUE(id) {
//   const arrToQUEUE = await readQUEUE();
//   console.log(arrToQUEUE);
//   const index = arrToQUEUE.indexOf(id);
//   if ((await index) === -1) {
//     return;
//   } else {
//     arrToQUEUE.splice(index, 1);
//     console.log(arrToQUEUE);
//     saveQUEUE(arrToQUEUE);
//   }
// }
// deleteFromQUEUE(1255);

// повертає масив всіх фільмів до перегляду або []
// async function readAllWatchedFilm() {
//   const arrWatched = [];
//   if (!isUserSignedIn()) {
//     console.log(arrWatched);
//     return arrWatched;
//   } else {
//     const allListWatch = await readWatched();
//     console.log(allListWatch);
//     return allListWatch;
//   }
// }
// readAllWatchedFilm();

// повертає масив всіх фільмів в черзі або []
// async function readAllQueueFilm() {
//   const arrQueue = [];
//   if (!isUserSignedIn()) {
//     console.log(arrQueue);
//     return arrQueue;
//   } else {
//     const allListQueue = await readQUEUE();
//     console.log(allListQueue);
//     return allListQueue;
//   }
// }
// readAllQueueFilm();

// Перевіряє чи є filmId у відповідному сховищі, true - false
// async function isSavedFromWatched(filmId) {
//   const arrToWatch = await readWatched();
//   console.log(arrToWatch);
//   return await arrToWatch.includes(filmId);
// }
// isSavedFromWatched(4444);

// async function isSavedFromQueue(filmId) {
//   const arrToQUEUE = await readQUEUE();
//   console.log(arrToQUEUE);
//   //   console.log(await arrToQUEUE.includes(filmId));
//   return await arrToQUEUE.includes(filmId);
// }
// isSavedFromQueue(486451);

export {
  addIdFilmToWatch,
  addIdFilmToQUEUE,
  deleteFromWatched,
  deleteFromQUEUE,
  readAllWatchedFilm,
  readAllQueueFilm,
  isSavedFromWatched,
  isSavedFromQueue,
};
