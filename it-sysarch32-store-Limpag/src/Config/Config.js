// Config.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCHaLcNYjqOPdlSQZvxg2SPOJBNc1RnItk",
  authDomain: "it-sysarch32-store-limpag2.firebaseapp.com",
  projectId: "it-sysarch32-store-limpag2",
  storageBucket: "it-sysarch32-store-limpag2.appspot.com",
  messagingSenderId: "410970927121",
  appId: "1:410970927121:web:aa8d73297aa70d940f01b0",
  measurementId: "G-JTHFJN1WC0"
};


const firebaseapp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebaseapp.firestore();
const storage = firebaseapp.storage();

export { auth, db, storage };
