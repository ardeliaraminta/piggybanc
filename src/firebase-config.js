// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr_rkBouzZXK1LvQy26lCf67EmyEAzu1s",
  authDomain: "piggybanc-504c7.firebaseapp.com",
  projectId: "piggybanc-504c7",
  storageBucket: "piggybanc-504c7.appspot.com",
  messagingSenderId: "31763510728",
  appId: "1:31763510728:web:caca84a0beea46f4ebfcfd",
  measurementId: "G-5R2F80D19D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();