const config = {
  apiKey: 'AIzaSyDLECkBiM_zJdUtuEN2mdKPTBBYEj_ZLaA',
  authDomain: 'filmoteka-a4d37.firebaseapp.com',
  projectId: 'filmoteka-a4d37',
  storageBucket: 'filmoteka-a4d37.appspot.com',
  messagingSenderId: '925416976763',
  appId: '1:925416976763:web:829d5454b8848bbcec8dde',
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      'No Firebase configuration object provided.' +
        '\n' +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
