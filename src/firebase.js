import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAVojDzKwRxZzm4p4HC7rL11U5cUkqKS-I",
  authDomain: "fayez-instagram.firebaseapp.com",
  databaseURL: "https://fayez-instagram.firebaseio.com",
  projectId: "fayez-instagram",
  storageBucket: "fayez-instagram.appspot.com",
  messagingSenderId: "691761700698",
  appId: "1:691761700698:web:de3496e21628246f5d9d63",
  measurementId: "G-1G9L0QFX46",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
