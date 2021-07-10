// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBorO7BdIwTaaXaEeZSWYQ0NH7m5m2iVwE",
  authDomain: "clone-1c5a5.firebaseapp.com",
  projectId: "clone-1c5a5",
  storageBucket: "clone-1c5a5.appspot.com",
  messagingSenderId: "799025708725",
  appId: "1:799025708725:web:dcf2108f9674f4b1f788fc",
  measurementId: "G-S3XRV61KK9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();//handles all the signin etc stuff....

export {db, auth};