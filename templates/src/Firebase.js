import * as firebase from 'firebase';

/**
 * Configuracóes do firebase .
 * @type {{storageBucket: string, apiKey: string, messagingSenderId: string, projectId: string, databaseURL: string, authDomain: string}}
 */
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
