// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfQs2RGxh_TUuD2b9eOUiuKECVyoxVhL0",
  authDomain: "ahen-a9aae.firebaseapp.com",
  projectId: "ahen-a9aae",
  storageBucket: "ahen-a9aae.appspot.com",
  messagingSenderId: "485776673593",
  appId: "1:485776673593:android:0470df6ee6266615eff6e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export default db;
export {auth};
