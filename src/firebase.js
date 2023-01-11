// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClkyPijdBisoCDcEQOhe7ynJdrrpYdcJ4",
  authDomain: "ahen-f91e5.firebaseapp.com",
  projectId: "ahen-f91e5",
  storageBucket: "ahen-f91e5.appspot.com",
  messagingSenderId: "456219397253",
  appId: "1:456219397253:web:0a2a6574b2742cf311edec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default db;
export {auth};
